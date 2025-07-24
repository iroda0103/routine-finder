// import { RightOutlined, LeftOutlined ,HeartOutlined} from "@ant-design/icons";
// import React, { useEffect, useState } from "react";

// const PRODUCT_URL = "https://jeval.com.au/collections/hair-care/products.json?page=1";

// const ResultProductContainer = () => {
//     const [products, setProducts] = useState([]);
//     const [wishlist, setWishlist] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const ITEMS_PER_PAGE = 2; // dizayn bo‘yicha 760px = 2ta card

//     useEffect(() => {
//         const stored = localStorage.getItem("wishlist");
//         if (stored) {
//             setWishlist(JSON.parse(stored));
//         }
//     }, []);

//     useEffect(() => {
//         fetch(PRODUCT_URL)
//             .then((res) => res.json())
//             .then((data) => {
//                 let result = data.products || [];
//                 const prioritized = [
//                     ...result.filter((p) => wishlist.includes(p.id)),
//                     ...result.filter((p) => !wishlist.includes(p.id)),
//                 ];
//                 setProducts(prioritized);
//             });
//     }, [wishlist]);

//     const toggleWishlist = (id) => {
//         let updated = [...wishlist];
//         if (wishlist.includes(id)) {
//             updated = updated.filter((item) => item !== id);
//         } else {
//             updated.push(id);
//         }
//         setWishlist(updated);
//         localStorage.setItem("wishlist", JSON.stringify(updated));
//     };

//     const handleNext = () => {
//         const maxIndex = Math.ceil(products.length / ITEMS_PER_PAGE) - 1;
//         if (currentIndex < maxIndex) {
//             setCurrentIndex(currentIndex + 1);
//         }
//     };

//     const itemWidth = 386; // 350px + 36px gap
//     const translateX = -currentIndex * itemWidth * ITEMS_PER_PAGE;
//     const isLastSlide = (currentIndex + 1) * ITEMS_PER_PAGE >= products.length;

//     return (
//         <div className="container result-product">
//             <section className="result-product__text-wrapper">
//                 <h3 className="product--title">Daily routine</h3>
//                 <p className="product--description">
//                    Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
//                 </p>
//             </section>

//             <section className="product-slider" style={{ overflow: "hidden", width: "760px" }}>
//                 <div
//                     className="slider-track"
//                     style={{
//                         display: "flex",
//                         gap: "36px",
//                         transform: `translateX(${translateX}px)`,
//                         transition: "transform 0.5s ease",
//                     }}
//                 >
//                     {products.map((product) => (
//                         <div key={product.id} className="product-card">
//                             <div className="image-wrapper">
//                                 <img src={product.images[0]?.src} alt={product.title} loading="eager" />
//                                 <span
//                                     className={`heart ${wishlist.includes(product.id) ? "active" : ""}`}
//                                     onClick={() => toggleWishlist(product.id)}
//                                 >
//                                     <HeartOutlined />
//                                 </span>

//                             </div>
//                             <div className="product-text-wrapper">
//                                 <h3 className="product--title">{product.title}</h3>
//                                 <p className="price">${product.variants[0]?.price}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <div
//                 className="prev-btn"
//                 onClick={handleNext}
//                 style={{
//                     cursor: isLastSlide ? "not-allowed" : "pointer",
//                     marginTop: "20px",
//                     opacity: isLastSlide ? 0.5 : 1,
//                 }}
//             >
//                 {isLastSlide
//                     ? <LeftOutlined />  // ikon o‘zgaradi, ammo yo‘nalish o‘zgarmaydi
//                     : <RightOutlined />}
//             </div>
//         </div>
//     );
// };

// export default ResultProductContainer;
import { RightOutlined, LeftOutlined, HeartOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const PRODUCT_URL = "https://jeval.com.au/collections/hair-care/products.json?page=1";

const ResultProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ITEMS_PER_PAGE = 2;

    useEffect(() => {
        const stored = localStorage.getItem("wishlist");
        if (stored) {
            setWishlist(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        fetch(PRODUCT_URL)
            .then((res) => res.json())
            .then((data) => {
                const allProducts = data.products || [];
                console.log("All Products:", allProducts);

                // Get quiz answers from localStorage
                // const answers = JSON.parse(localStorage.getItem("quizAnswers") || "{}");

                // // Filter based on tags
                // const filtered = allProducts.filter((product) => {
                //   const tags = product.tags.map((t) => t.toLowerCase());
                //   return Object.values(answers).some((val) => tags.includes(val));
                // });

                // console.log("Filtered Products:", filtered);

                // // Prioritize wishlist products
                // const prioritized = [
                //   ...filtered.filter((p) => wishlist.includes(p.id)),
                //   ...filtered.filter((p) => !wishlist.includes(p.id)),
                // ];
                const answers = JSON.parse(localStorage.getItem("quizAnswers") || "{}");
                const values = Object.values(answers).map((v) => v.toLowerCase());

                const filteredProducts = allProducts.filter((product) => {
                    const title = product.title.toLowerCase();
                    const body = product.body_html.toLowerCase();
                    const tags = product.tags.map((t) => t.toLowerCase());

                    return values.some((ans) =>
                        title.includes(ans) || body.includes(ans) || tags.includes(ans)
                    );
                });
                console.log("Filtered Products:", filteredProducts);
                
                setProducts(filteredProducts);
            });
    }, [wishlist]);

    const toggleWishlist = (id) => {
        let updated = [...wishlist];
        if (wishlist.includes(id)) {
            updated = updated.filter((item) => item !== id);
        } else {
            updated.push(id);
        }
        setWishlist(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
    };

    const handleNext = () => {
        const maxIndex = Math.ceil(products.length / ITEMS_PER_PAGE) - 1;
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const itemWidth = 386; // 350px + 36px gap
    const translateX = -currentIndex * itemWidth * ITEMS_PER_PAGE;
    const isFirstSlide = currentIndex === 0;
    const isLastSlide = (currentIndex + 1) * ITEMS_PER_PAGE >= products.length;

    return (
        <div className="container result-product">
            <section className="result-product__text-wrapper">
                <h3 className="product--title">Daily routine</h3>
                <p className="product--description">
                    Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
                </p>
            </section>

            <section className="product-slider" style={{ overflow: "hidden", width: "760px" }}>
                <div
                    className="slider-track"
                    style={{
                        display: "flex",
                        gap: "36px",
                        transform: `translateX(${translateX}px)`,
                        transition: "transform 0.5s ease",
                    }}
                >
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="image-wrapper">
                                <img src={product.images[0]?.src} alt={product.title} loading="eager" />
                                <span
                                    className={`heart ${wishlist.includes(product.id) ? "active" : ""}`}
                                    onClick={() => toggleWishlist(product.id)}
                                >
                                    <HeartOutlined />
                                </span>
                            </div>
                            <div className="product-text-wrapper">
                                <h3 className="product--title">{product.title}</h3>
                                <p className="price">${product.variants[0]?.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="slider-nav-buttons" style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
                <button
                    className="prev-btn"
                    onClick={handlePrev}
                    disabled={isFirstSlide}
                    style={{ cursor: isFirstSlide ? "not-allowed" : "pointer", opacity: isFirstSlide ? 0.5 : 1 }}
                >
                    <LeftOutlined />
                </button>

                <button
                    className="next-btn"
                    onClick={handleNext}
                    disabled={isLastSlide}
                    style={{ cursor: isLastSlide ? "not-allowed" : "pointer", opacity: isLastSlide ? 0.5 : 1 }}
                >
                    <RightOutlined />
                </button>
            </div>
        </div>
    );
};

export default ResultProductContainer;
