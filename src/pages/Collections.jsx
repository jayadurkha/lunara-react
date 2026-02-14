import { useState } from "react";

// image import
import necklace1 from "../images/necklace1.jpg"
import necklace2 from "../images/necklace2.jpg"
import necklace3 from "../images/necklace3.jpg"
import necklace4 from "../images/necklace4.jpg"
import necklace5 from "../images/necklace5.jpg"
import necklace6 from "../images/necklace6.jpg"
import necklace7 from "../images/necklace7.jpg"
import necklace8 from "../images/necklace8.jpg"
import necklace9 from "../images/necklace9.jpg"
import necklace10 from "../images/necklace10.jpg"
import necklace11 from "../images/necklace11.jpg"
import necklace12 from "../images/necklace12.jpg"

import ring1 from "../images/rings1.jpg"
import ring2 from "../images/rings2.jpg"
import ring3 from "../images/rings3.jpg"
import ring4 from "../images/rings4.jpg"
import ring5 from "../images/rings5.jpg"
import ring6 from "../images/rings6.jpg"
import ring7 from "../images/rings7.jpg"
import ring8 from "../images/rings8.jpg"
import ring9 from "../images/rings9.jpg"
import ring10 from "../images/rings10.jpg"
import ring11 from "../images/rings11.jpg"
import ring12 from "../images/rings12.jpg"

import earrings1 from "../images/earrings1.jpg"
import earrings2 from "../images/earrings2.jpg"
import earrings3 from "../images/earrings3.jpg"
import earrings4 from "../images/earrings4.jpg"
import earrings5 from "../images/earrings5.jpg"
import earrings6 from "../images/earrings6.jpg"
import earrings7 from "../images/earrings7.jpg"
import earrings8 from "../images/earrings8.jpg"
import earrings9 from "../images/earrings9.jpg"
import earrings10 from "../images/earrings10.jpg"
import earrings11 from "../images/earrings11.jpg"
import earrings12 from "../images/earrings12.jpg"

import snecklace1 from "../images/silverNecklace1.jpg"
import snecklace2 from "../images/silverNecklace2.jpg"
import snecklace3 from "../images/silverNecklace3.jpg"
import snecklace4 from "../images/silverNecklace4.jpg"
import snecklace5 from "../images/silverNecklace5.jpg"
import snecklace6 from "../images/silverNecklace6.jpg"
import snecklace7 from "../images/silverNecklace7.jpg"
import snecklace8 from "../images/silverNecklace8.jpg"
import snecklace9 from "../images/silverNecklace9.jpg"
import snecklace10 from "../images/silverNecklace10.jpg"
import snecklace11 from "../images/silverNecklace11.jpg"
import snecklace12 from "../images/silverNecklace12.jpg"

import sring1 from "../images/silverRings1.jpg"
import sring2 from "../images/silverRings2.jpg"
import sring3 from "../images/silverRings3.jpg"
import sring4 from "../images/silverRings4.jpg"
import sring5 from "../images/silverRings5.jpg"
import sring6 from "../images/silverRings6.jpg"
import sring7 from "../images/silverRings7.jpg"
import sring8 from "../images/silverRings8.jpg"
import sring9 from "../images/silverRings9.jpg"
import sring10 from "../images/silverRings10.jpg"
import sring11 from "../images/silverRings11.jpg"
import sring12 from "../images/silverRings12.jpg"

import sEarrings1 from "../images/0silverEarrings1.jpg"
import sEarrings2 from "../images/0silverEarrings2.jpg"
import sEarrings3 from "../images/0silverEarrings3.jpg"
import sEarrings4 from "../images/0silverEarrings4.jpg"
import sEarrings5 from "../images/0silverEarrings5.jpg"
import sEarrings6 from "../images/0silverEarrings6.jpg"
import sEarrings7 from "../images/0silverEarrings7.jpg"
import sEarrings8 from "../images/0silverEarrings8.jpg"
import sEarrings9 from "../images/0silverEarrings9.jpg"
import sEarrings10 from "../images/0silverEarrings10.jpg"
import sEarrings11 from "../images/0silverEarrings11.jpg"
import sEarrings12 from "../images/0silverEarrings12.jpg"





export default function Collection() {
            const [material,setMaterial]=
    useState("all");
  return (
    <div className="container mt-4">




     {/* <!-- FILTERS --> */}
<section className="bg-light py-4">
    <div className="container d-flex flex-wrap justify-content-between">
        <div>
            <strong>Material:</strong>
            <button className="btn btn-outline-secondary btn-sm filter-btn" data-filter="material" data-value="all">All</button>
            <button className="btn btn-outline-secondary btn-sm filter-btn" data-filter="material" data-value="gold">Gold</button>
            <button className="btn btn-outline-secondary btn-sm filter-btn" data-filter="material" data-value="silver">Silver</button>
        </div>

        <div>
            <strong>Style:</strong>
            <button className="btn btn-outline-secondary btn-sm filter-btn" data-filter="style" data-value="all">All</button>
            <button className="btn btn-outline-secondary btn-sm filter-btn" data-filter="style" data-value="Necklaces">Necklaces</button>
            <button className="btn btn-outline-secondary btn-sm filter-btn" data-filter="style" data-value="Rings">Rings</button>
            <button className="btn btn-outline-secondary btn-sm filter-btn" data-filter="style" data-value="Earrings">Earrings</button>
        </div>
    </div>
</section>


{/* <!--card--> */}
  


<section id="products" className="py-5">
    <div className="container">
        <div className="row g-4">
 
{/* <!--neclace-gold--> */}

            {/* <!-- necklace 1 --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product1">
                    <img src={necklace1} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Luna Halo Moonstone Pendant</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace 2 --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product2">
                    <img src={necklace2} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Celestia Moonstone Necklace</h5>
                        <p className="text-muted">Signature</p>
                        <p className="fw-bold">₹ 2,87,349</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace 3 --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product3">
                    <img src={necklace3} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Gold Moonstone Necklace</h5>
                        <p className="text-muted">classNameic</p>
                        <p className="fw-bold">₹ 2,55,900</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace 4 --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product4">
                    <img src={necklace4}className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Drop Moonstone Y-Necklace</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,01,900</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace 5 --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product5">
                    <img src={necklace5} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Ethereal Oval Moonstone Charm</h5>
                        <p className="text-muted">Signature</p>
                        <p className="fw-bold">₹ 2,01,900</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace 6 --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product6">
                    <img src={necklace6} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Regal Radiance Moonstone Pendant</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,67,900</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace 7 --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product7">
                    <img src={necklace7} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Vintage Glow Moonstone Necklace</h5>
                        <p className="text-muted">classNameic</p>
                        <p className="fw-bold">₹ 3,11,900</p>
                    </div>
                </div>
            </div>


            {/* <!-- necklace 8  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product8">
                    <img src={necklace8} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Moonlit Crescent Minimal Necklace</h5>
                        <p className="text-muted">Minimal</p>
                        <p className="fw-bold">₹ 1,99,900</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace 9  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product9">
                    <img src={necklace9} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Gold Moonstone Necklace</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 2,33,799</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace 10  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product10">
                    <img src={necklace10} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Luna Halo Moonstone Pendant</h5>
                        <p className="text-muted">classNameic</p> 
                        <p className="fw-bold">₹ 2,66,999</p>
                    </div>
                </div>
            </div>


            {/* <!-- necklace 11  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product11">
                    <img src={necklace11} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Oval Moonstone Charm</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 2,55,900</p>
                    </div>
                </div>
            </div>


            {/* <!-- necklace 12  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product12">
                    <img src={necklace12} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Gold Moonstone Necklace</h5>
                        <p className="text-muted">Premium</p> 
                        <p className="fw-bold">₹ 2,01,900</p>
                    </div>
                </div>
            </div>



 
{/* <!--rings-gold--> */}

          {/* <!-- ring 13  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product13">
                    <img src={ring1} className="card-img-top "/>

                    <div className="card-body text-center">
                        <h5>Aurora Luna Gold Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,11,999</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 14  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product14">
                    <img src={ring2} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Eclipse Royale Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,22,999</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 15  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product15">
                    <img src={ring3} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Soluna Crown Gold Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,999</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 16  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product16">
                    <img src={ring4} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Moonfire Heirloom Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,33,999</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 17  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product17">
                    <img src={ring5} className="card-img-top "/>
                    <div className="card-body text-center">
                        <h5>Celestial Crest Gold Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,44,999</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 18  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product18">
                    <img src={ring6} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Gilded Moon Halo Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,55,999</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 19  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product19">
                    <img src={ring7} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Starlume Gold Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,11,999</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 20  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product20">
                    <img src={ring8} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Lunar Empress Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,22,999</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 21  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product21">
                    <img src={ring9} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Golden Orbit Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,44,999</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 22  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product22">
                    <img src={ring10} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Moonray Majesty Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,55,999</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 23  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product23">
                    <img src={ring11} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Astris Gold Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,36,379</p>
                    </div>
                </div>
            </div>

            {/* <!-- ring 24  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product24">
                    <img src={ring12} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Lunaria Royale Ring</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>




{/* <!--Earrings-gold--> */}

            {/* <!-- Earrings 25  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product25">
                    <img src={earrings1} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Celeste Glow Moonstone Earrings</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 26  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product26">
                    <img src={earrings2} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Luna Whisper Gold Drops</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 27  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product27">
                    <img src={earrings3} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Aurora Pearl Moonstone Hoops</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 28  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product28">
                    <img src={earrings4} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Stellar Dew Moonstone Earrings</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 29  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product29">
                    <img src={earrings5} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Moonveil Elegance Drops</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 30--> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product30">
                    <img src={earrings6} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Elysia Lunar Gold Earrings</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 31  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product31">
                    <img src={earrings7} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Nova Mist Moonstone Danglers</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 32  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product32">
                    <img src={earrings8} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Opaline Moonlight Earrings</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 33  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product33">
                    <img src={earrings9} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Serenova Moonstone Gold Drops</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 34  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product34">
                    <img src={earrings10} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Lunelle Radiance Earrings</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 35  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product35">
                    <img src={earrings11} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Astris Pearl Moonstone Hoops</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings 36  --> */}
            <div className="col-md-3 product-card" data-material="gold" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product36">
                    <img src={earrings12} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Etherea Moonstone Gold Earrings</h5>
                        <p className="text-muted">Luxury</p> 
                        <p className="fw-bold">₹ 1,00,890</p>
                    </div>
                </div>
            </div>


{/* <!--neclace-Silver--> */}

            {/* <!-- necklace-S 37 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product37">
                    <img src={snecklace1} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Luna Halo Moonstone Pendant</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 38 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product38">
                    <img src={snecklace2} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Moonveil Silver Glow Necklace</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 39 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product39">
                    <img src={snecklace3} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Celestia Moonstone Silver Pendant</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 40 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product40">
                    <img src={snecklace4} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Aurora Mist Moonstone Necklace</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 41 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product41">
                    <img src={snecklace5} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Ethereal Halo Moonstone Pendant</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 42 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product42">
                    <img src={snecklace6} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Opaline Luna Silver Necklace</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 43 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product43">
                    <img src={snecklace7} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Stellar Dew Moonstone Pendant</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 44 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product44">
                    <img src={snecklace8} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Lunelle Radiance Silver Necklace</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 45 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product45">
                    <img src={snecklace9} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Astris Moonlight Moonstone Pendant</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 46 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product46">
                    <img src={snecklace10} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Nova Halo Moonstone Necklace</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 47 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product47">
                    <img src={snecklace11} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Serena Moonstone Silver Drop</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- necklace-S 48 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Necklaces">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product48">
                    <img src={snecklace12} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Elysia Lunar Glow Necklace</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 2,00,000</p>
                    </div>
                </div>
            </div>



{/* <!--Rings-Silver--> */}

            {/* <!-- Rings-S 49 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product49">
                    <img src={sring1} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Elysia Lunar Glow Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹28,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 50 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product50">
                    <img src={sring2} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Selene Whisper Moon Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 32,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 51 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product51">
                    <img src={sring3} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Aurora Mooncrest Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 35,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 52 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product52">
                    <img src={sring4} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Celestia Blue Halo Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 30,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 53 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product53">
                    <img src={sring5} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Lunaris Veil Silver Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 26,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 54 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product54">
                    <img src={sring6} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Opaline Moon Embrace Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 34,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 55 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product55">
                    <img src={sring7} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Stella Frost Moon Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 29,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 56 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product56">
                    <img src={sring8} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Nyra Moonlight Bloom Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 27,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 57 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product57">
                    <img src={sring9} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Aurelia Lunar Charm Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 31,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 58 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product58">
                    <img src={sring10} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Isla Mystic Moon Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 33,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 59 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product59">
                    <img src={sring11} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Virelle Moonstone Grace Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 36,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Rings-S 60 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Rings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product60">
                    <img src={sring12} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Elowen Celestial Silver Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 38,000</p>
                    </div>
                </div>
            </div>


{/* <!--Earrings-Silver--> */}


            {/* <!-- Earrings-S 61 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product61">
                    <img src={sEarrings1} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Elowen Celestial Silver Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 38,000</p>
                    </div>
                </div>
            </div>

            {/* <!-- Earrings-S 62 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product62">
                    <img src={sEarrings2} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Selene Aura Oval Studs</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 38,000</p>
                    </div>
                </div>
            </div>


                        {/* <!-- Earrings-S 63 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product63">
                    <img src={sEarrings3} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Lunaris Crescent Charm Earrings</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 45,000</p>
                    </div>
                </div>
            </div>


                        {/* <!-- Earrings-S 64 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product64">
                    <img src={sEarrings4} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Nyra Moonbeam Trio Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 40,000</p>
                    </div>
                </div>
            </div>


                        {/* <!-- Earrings-S 65 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product65">
                    <img src={sEarrings5} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Aurelia Frost Halo Ring</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 48,000</p>
                    </div>
                </div>
            </div>


                        {/* <!-- Earrings-S 66 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product66">
                    <img src={sEarrings6} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Virelle Pearl Dew Drop Earrings</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 44,000</p>
                    </div>
                </div>
            </div>


                        {/* <!-- Earrings-S 67 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product67">
                    <img src={sEarrings7} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Celestia Twilight Chain Earrings</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 46,000</p>
                    </div>
                </div>
            </div>


                        {/* <!-- Earrings-S 68 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product68">
                    <img src={sEarrings8} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Isla Moonwave Hoop Earrings</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 50,000</p>
                    </div>
                </div>
            </div>


                        {/* <!-- Earrings-S 69 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product69">
                    <img src={sEarrings9} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Opaline Crystal Cascade Earrings</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 55,000</p>
                    </div>
                </div>
            </div>


                        {/* <!-- Earrings-S 70 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product70">
                    <img src={sEarrings10} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Stella Drift Silver Drops</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 43,000</p>
                    </div>
                </div>
            </div>


                        {/* <!-- Earrings-S 71 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product71">
                    <img src={sEarrings11} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Elysia Triple Moon Earrings</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 52,000</p>
                    </div>
                </div>
            </div>


                        {/* <!-- Earrings-S 72 --> */}
            <div className="col-md-3 product-card" data-material="silver" data-style="Earrings">
                <div className="card h-100" data-bs-toggle="modal" data-bs-target="#product72">
                    <img src={sEarrings12} className="card-img-top"/>
                    <div className="card-body text-center">
                        <h5>Luna Arc Mystic Earrings</h5>
                        <p className="text-muted">Luxury</p>
                        <p className="fw-bold">₹ 47,000</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>


















{/* <!--MODEL neclace-gold--> */}

{/* <!-- MODAL 1--> */}
<div className="modal fade" id="product1">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Luna Halo Moonstone Pendant</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace1} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4" style={{ color: "rgb(17, 17, 69)" }}> ₹ 2,00,000 </p>
                    <p>Elegant Necklace inspired by moonlight.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>
 
{/* <!-- MODAL 2 --> */}
<div className="modal fade" id="product2">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Celestia Moonstone Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace2} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Signature</p>
                    <p className="fw-bold fs-4" style={{ color: "rgb(17, 17, 69)" }}> ₹ 2,00,000 </p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 3 --> */}
<div className="modal fade" id="product3">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Gold Moonstone Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace3} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: classNameic</p>
                    <p className="fw-bold fs-4" style={{ color: "rgb(17, 17, 69)" }}>₹ 2,55,900</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 4 --> */}
<div className="modal fade" id="product4">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Drop Moonstone Y-Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace4} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 2,01,900</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 5 --> */}
<div className="modal fade" id="product5">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Ethereal Oval Moonstone Charm</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace5} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Signature</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 2,01,900</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 6 --> */}
<div className="modal fade" id="product6">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Regal Radiance Moonstone Pendant</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace6} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 2,67,900</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 7 --> */}
<div className="modal fade" id="product7">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Vintage Glow Moonstone Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace7} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: classNameic</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 3,11,900</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 8 --> */}
<div className="modal fade" id="product8">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Moonlit Crescent Minimal Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace8} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Minimal</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,99,900</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 9 --> */}
<div className="modal fade" id="product9">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Gold Moonstone Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace9} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 2,33,799</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 10 --> */}
<div className="modal fade" id="product10">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Luna Halo Moonstone Pendant</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace10} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: classNameic</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 2,66,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 11 --> */}
<div className="modal fade" id="product11">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Oval Moonstone Charm</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace11} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 2,55,900</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 12 --> */}
<div className="modal fade" id="product12">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Gold Moonstone Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={necklace12} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Premium</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 2,01,900</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>


{/* <!-- MODAL rings-gold--> */}

{/* <!-- MODAL 13 --> */}    
<div className="modal fade" id="product13">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Aurora Luna Gold Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring1} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,11,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 14 --> */}
<div className="modal fade" id="product14">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Eclipse Royale Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring2} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,22,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 15 --> */}
<div className="modal fade" id="product15">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Soluna Crown Gold Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring3} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,000,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 16 --> */}
<div className="modal fade" id="product16">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Moonfire Heirloom Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring4} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,33,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 17 --> */}
<div className="modal fade" id="product17">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Celestial Crest Gold Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring5} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,44,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 18 --> */}
<div className="modal fade" id="product18">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Gilded Moon Halo Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring6} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,44,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 19 --> */}
<div className="modal fade" id="product19">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Starlume Gold Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring7} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,11,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 20 --> */}
<div className="modal fade" id="product20">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Lunar Empress Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring8} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹1,22,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 21 --> */}
<div className="modal fade" id="product21">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Golden Orbit Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring9} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,44,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 22 --> */}
<div className="modal fade" id="product22">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Moonray Majesty Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring10} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,55,999</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 23 --> */}
<div className="modal fade" id="product23">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Astris Gold Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring11} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 1,36,379</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 24 --> */}
<div className="modal fade" id="product24">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Lunaria Royale Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={ring12} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>


{/* <!-- MODAL Earrings-gold--> */}                                                        

{/* <!-- MODAL 25 --> */}
<div className="modal fade" id="product25">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Celeste Glow Moonstone Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings1} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>


{/* <!-- MODAL 26 --> */}
<div className="modal fade" id="product26">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Luna Whisper Gold Drops</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings2} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 27 --> */}
<div className="modal fade" id="product27">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Aurora Pearl Moonstone Hoops</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings3} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 28 --> */}
<div className="modal fade" id="product28">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Stellar Dew Moonstone Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings4} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 29 --> */}
<div className="modal fade" id="product29">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Moonveil Elegance Drops</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings5} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 30 --> */}
<div className="modal fade" id="product30">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Elysia Lunar Gold Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings6} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 31 --> */}
<div className="modal fade" id="product31">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Nova Mist Moonstone Danglers</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings7} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 32 --> */}
<div className="modal fade" id="product32">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Opaline Moonlight Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings8} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 33 --> */}
<div className="modal fade" id="product33">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Serenova Moonstone Gold Drops</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings9} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 34 --> */}
<div className="modal fade" id="product34">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Lunelle Radiance Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings10} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 35 --> */}
<div className="modal fade" id="product35">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Astris Pearl Moonstone Hoops</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings11} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 36 --> */}
<div className="modal fade" id="product36">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Etherea Moonstone Gold Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={earrings12} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Gold</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>


{/* <!--MODAL neclace-Silver--> */}

{/* <!-- MODAL 37 --> */}
<div className="modal fade" id="product37">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">                                              
                <h5>Luna Halo Moonstone Pendant</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace1} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 38 --> */}
<div className="modal fade" id="product38">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Moonveil Silver Glow Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace2} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 39 --> */}
<div className="modal fade" id="product39">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Celestia Moonstone Silver Pendant</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace3} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 40 --> */}
<div className="modal fade" id="product40">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Aurora Mist Moonstone Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace4} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 41 --> */}
<div className="modal fade" id="product41">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Ethereal Halo Moonstone Pendant</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace5} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 42 --> */}
<div className="modal fade" id="product42">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Opaline Luna Silver Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace6} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 43 --> */}
<div className="modal fade" id="product43">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Stellar Dew Moonstone Pendant</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace7} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 44 --> */}
<div className="modal fade" id="product44">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Lunelle Radiance Silver Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace8} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 45 --> */}
<div className="modal fade" id="product45">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Astris Moonlight Moonstone Pendant</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace9} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 46 --> */}
<div className="modal fade" id="product46">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Nova Halo Moonstone Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace10} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 47 --> */}
<div className="modal fade" id="product47">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Serena Moonstone Silver Drop</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace11} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 48 --> */}
<div className="modal fade" id="product48">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Elysia Lunar Glow Necklace</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={snecklace12} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ ₹ 1,00,890</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>


{/* <!--MODEL rings-silver--> */}

{/* <!-- MODAL 49 --> */}
<div className="modal fade" id="product49">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">                                   
                <h5>Elysia Lunar Glow Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring1} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 28,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 50 --> */}
<div className="modal fade" id="product50">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Selene Whisper Moon Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring2} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 32,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 51 --> */}
<div className="modal fade" id="product51">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Aurora Mooncrest Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring3} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹35,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 52 --> */}
<div className="modal fade" id="product52">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Celestia Blue Halo Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring4} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 30,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 53 --> */}
<div className="modal fade" id="product53">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Lunaris Veil Silver Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring5} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹26,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 54 --> */}
<div className="modal fade" id="product54">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Opaline Moon Embrace Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring6} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 34,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 55 --> */}
<div className="modal fade" id="product55">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Stella Frost Moon Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring7} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 29,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 56 --> */}
<div className="modal fade" id="product56">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Nyra Moonlight Bloom Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring8} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 27,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 57 --> */}
<div className="modal fade" id="product57">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Aurelia Lunar Charm Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring9} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 31,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 58 --> */}
<div className="modal fade" id="product58">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Isla Mystic Moon Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring10} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 33,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 59 --> */}
<div className="modal fade" id="product59">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Virelle Moonstone Grace Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring11} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 36,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 60 --> */}
<div className="modal fade" id="product60">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Elowen Celestial Silver Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sring12} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 30,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!--MODAL Earrings-Silver--> */}



{/* <!-- MODAL 61 --> */}
<div className="modal fade" id="product61">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Elowen Moonfall Drop Earrings</h5>                     
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings1} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹38,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 62 --> */}
<div className="modal fade" id="product62">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Selene Aura Oval Studs</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings2} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹42,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 63 --> */}
<div className="modal fade" id="product63">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Lunaris Crescent Charm Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings3} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 45,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 64 --> */}
<div className="modal fade" id="product64">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Nyra Moonbeam Trio Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings4} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 40,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 65 --> */}
<div className="modal fade" id="product65">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Aurelia Frost Halo Ring</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings5} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹ 48,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 66 --> */}
<div className="modal fade" id="product66">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Virelle Pearl Dew Drop Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings6} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹44,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 67 --> */}
<div className="modal fade" id="product67">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Celestia Twilight Chain Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings7} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹46,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 68 --> */}
<div className="modal fade" id="product68">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Isla Moonwave Hoop Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings8} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹50,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 69 --> */}
<div className="modal fade" id="product69">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Opaline Crystal Cascade Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings9} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹55,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 70 --> */}
<div className="modal fade" id="product70">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Stella Drift Silver Drops</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings10} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹43,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 71 --> */}
<div className="modal fade" id="product71">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Elysia Triple Moon Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings11} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹52,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- MODAL 72 --> */}
<div className="modal fade" id="product72">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Luna Arc Mystic Earrings</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row">
                <img src={sEarrings12} className="img-fluid me-4" style={{ maxWidth: "300px" }}/>
                <div>
                    <p>Material: Silver</p>
                    <p>Style: Luxury</p>
                    <p className="fw-bold fs-4"style={{ color: "rgb(17, 17, 69)" }}>₹47,000</p>
                    <p>Minimal elegance for everyday luxury.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>










{/* FOOTER  */}

<footer className="text-white text-center py-4">
    <p>© 2026 Lunara Moonstone Collection</p>
</footer>





    </div>
  );
}
