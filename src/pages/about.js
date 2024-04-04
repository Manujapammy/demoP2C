import Vision from "./vision";

export default function About() {
    return (
        <>
            <div>
                <h1 class="heading"> about
                    <span> us</span> </h1>
                <div class="row">
                    <div class="col">
                        <div class="content">
                            <h2 className="aboutHeading">Building as per your
                                <span> Convenience</span>
                            </h2>
                            <p>P2Construction is a one stop solution for all your home construction needs, providing the most comprehensive, turnkey, end-to-end services & solutions for all your home building requirements & desires. If you own a land then choose us to convert your dream home construction into reality by involving yourselves with our civil experts.</p>
                        </div>
                    </div>
                    <div class="col">
                        <Vision />
                    </div>
                </div>
                <div class="box-container">

                    <div class="box">
                        <h3>8+</h3>
                        <p>years of experience</p>
                    </div>

                    <div class="box">
                        <h3>75+</h3>
                        <p>project completed</p>
                    </div>

                    <div class="box">
                        <h3>75+</h3>
                        <p>satiesfied clients</p>
                    </div>

                    <div class="box">
                        <h3>80+</h3>
                        <p>active workers</p>
                    </div>
                </div>
            </div>
            <div class="row" style={{ marginBottom: "3rem", marginTop: "3rem" }}>
                <div class="Home_uniqueleft__3WFEs col-lg-2 col-md-12">
                    <div class="Home_headingtitle__1Pp9y">
                        <h2>one stop <span>solution</span></h2>
                    </div>
                    <p>In this market of unorganized sectors, we are professionally providing an in-house home construction service for clientele ranging from moderate to premium.</p>
                </div>
                <div class="Home_uniqueright__1eD3P col-lg-9 col-md-12">
                    <div class="row"><div class="Home_uniquelist__3lDTb col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="Home_uniqueimg__2dKE-">
                            <span>
                                <div class="aboutImg">
                                    <div class="boxBoaderStyle">
                                        <div class="boxBoaderStyle-inner">
                                            <img alt="" aria-hidden="true" role="presentation"
                                                src="/images/onTimeimage.webp"
                                                class="aboutImgSrc" />
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div class="Home_uniquecontent__2NW8V">
                            <h3>Timely Delivery</h3>
                            <p>Our Projects will be handed over on time as per the given schedule.  If there is any delay in handover, we pay a penalty for every day we delay.</p>
                        </div>
                    </div>
                        <div class="Home_uniquelist__3lDTb col-lg-5 col-md-6 col-sm-6 col-12">
                            <div class="Home_uniqueimg__2dKE-">
                                <span>
                                    <div
                                        class="timelyDelivery">
                                        <div class="timelyDeliveryDiv">
                                            <div class="boxBoaderStyle">
                                                <div class="boxBoaderStyle-inner">
                                                    <img alt="" aria-hidden="true" role="presentation"
                                                        src="/images/noChargesimage.webp"
                                                        class="timelyDeliveryImg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div class="Home_uniquecontent__2NW8V">
                                <h3>No Hidden Charges</h3>
                                <p>One lump sum cost till the completion and handover of the project.</p>
                            </div>
                        </div>
                        <div class="Home_uniquelist__3lDTb col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="Home_uniqueimg__2dKE-">
                                <span>
                                    <div
                                        class="noChargeDiv"
                                    >
                                        <div class="noChargeDiv1">
                                            <div class="boxBoaderStyle">
                                                <div class="boxBoaderStyle-inner">
                                                    <img alt="" aria-hidden="true" role="presentation"
                                                        src="/images/consultantFeeimage.webp"
                                                        class="noChargeImg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div class="Home_uniquecontent__2NW8V">
                                <h3>Construction Guarantee</h3>
                                <p>1 year construction guarantee and 10 year waterproofing warranty</p>
                            </div>
                        </div>
                        <div class="Home_uniquelist__3lDTb col-lg-5 col-md-6 col-sm-6 col-12">
                            <div class="Home_uniqueimg__2dKE-">
                                <span>
                                    <div
                                        class="constructionGuaDiv">
                                        <div class="constructionGuaDiv2">
                                            <div class="boxBoaderStyle">
                                                <div class="boxBoaderStyle-inner">
                                                    <img alt="" aria-hidden="true" role="presentation"
                                                        src="/images/noSubContractimage.webp"
                                                        class="constructionGuaImg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div class="Home_uniquecontent__2NW8V">
                                <h3>No Subcontracting</h3>
                                <p>Architecture, Structural, Construction, Electrical, Plumbing,  Interiors - Complete in-house team with no subcontracting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}