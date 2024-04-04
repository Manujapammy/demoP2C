import OnGoingProject from "./ongoingProject";

export default function ProjectCompleted() {
    let anugrahaNilaya = [
        { img: 'images/pic7/anugraha4.jpg', name: "Anugraha Nilaya" },
        { img: 'images/pic7/anugraha2.jpg', name: "Praveen" },
        { img: 'images/pic7/anugraha3.jpg', name: "Papegowdas" },
        { img: 'images/pic7/anugraha4.jpg', name: "Bhagya" },
        { img: 'images/pic7/anugraha3.jpg', name: "Papegowdas" },
        { img: 'images/pic7/anugraha4.jpg', name: "Bhagya" }
    ];
    let channegowdaNilaya = [
        { img: 'images/pic2/cHouse5.jpg', name: "cHouse Nilaya" },
        { img: 'images/pic2/cHouse2.jpg', name: "Praveen" },
        { img: 'images/pic2/cHouse3.jpg', name: "Papegowdas" },
        { img: 'images/pic2/cHouse4.jpg', name: "Bhagya" },
        { img: 'images/pic2/cHouse5.jpg', name: "Papegowdas" },
        { img: 'images/pic2/cHouse6.jpg', name: "Bhagya" }
    ];
    let jeevanNilaya = [
        { img: 'images/pic5/jeevan3.jpg', name: "jeevan Nilaya" },
        { img: 'images/pic5/jeevan2.jpg', name: "Praveen" },
        { img: 'images/pic5/jeevan3.jpg', name: "Papegowdas" },
        { img: 'images/pic5/jeevan4.jpg', name: "Bhagya" },
        { img: 'images/pic5/jeevan3.jpg', name: "Papegowdas" },
        { img: 'images/pic5/jeevan4.jpg', name: "Bhagya" }
    ];
    let kanasuNilaya = [
        { img: 'images/pic4/kanasu6.jpg', name: "kanasu Nilaya" },
        { img: 'images/pic4/kanasu2.jpg', name: "Praveen" },
        { img: 'images/pic4/kanasu3.jpg', name: "Papegowdas" },
        { img: 'images/pic4/kanasu4.jpg', name: "Bhagya" },
        { img: 'images/pic4/kanasu5.jpg', name: "Papegowdas" },
        { img: 'images/pic4/kanasu6.jpg', name: "Bhagya" }
    ];
    let anakereNilaya = [
        { img: 'images/pic1/anakere8.jpg', name: "anakere Nilaya" },
        { img: 'images/pic1/anakere2.jpg', name: "Praveen" },
        { img: 'images/pic1/anakere3.jpg', name: "Papegowdas" },
        { img: 'images/pic1/anakere7.jpg', name: "Bhagya" },
        { img: 'images/pic1/anakere1.jpg', name: "Papegowdas" },
        { img: 'images/pic1/anakere6.jpg', name: "Bhagya" }
    ];
    let newHouseNilaya = [
        { img: 'images/pic3/newMouse1.jpg', name: "newM21 Nilaya" },
        { img: 'images/pic3/newM2.jpg', name: "Praveen" },
        { img: 'images/pic3/newM21.jpg', name: "Papegowdas" },
        { img: 'images/pic3/newM2.jpg', name: "Bhagya" },
        { img: 'images/pic3/newM21.jpg', name: "Papegowdas" },
        { img: 'images/pic3/newM2.jpg', name: "Bhagya" }
    ];
    return (
        <>
            <h1 class="heading"> our
                <span> projects</span> </h1>

            <div class="box-container">

                <div class="box">
                    <div class="image">
                        {/* <img src="images/pic7/anugraha4.jpg" alt="anugraha nilaya" /> */}
                        <div className="pImageFolder">
                            <OnGoingProject
                                data={anugrahaNilaya} />
                        </div>
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>Anugraha Nilaya</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus">
                        </i>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        {/* <img src="images/pic2/cHouse6.jpg" alt="anugraha nilaya" /> */}
                        <div className="pImageFolder">
                            <OnGoingProject
                                data={channegowdaNilaya} />
                        </div>
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>Siddesh Nilaya</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </div>


                <div class="box">
                    <div class="image">
                        {/* <img src="images/pic5/jeevan2.jpg" alt="yashika nilaya" /> */}
                        <div className="pImageFolder">
                            <OnGoingProject
                                data={jeevanNilaya} />
                        </div>
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>Yashika Residency</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        {/* <img src="images/pic4/kanasu6.jpg" alt="kanasu nilaya" /> */}
                        <div className="pImageFolder">
                            <OnGoingProject
                                data={kanasuNilaya} />
                        </div>
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>Kanasu Nilaya</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        {/* <img src="images/pic1/anakere8.jpg" alt="anakere nilaya" /> */}
                        <div className="pImageFolder">
                            <OnGoingProject
                                data={anakereNilaya} />
                        </div>
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>Dream Home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        {/* <img src="images/pic3/newM21.jpg" alt="anugraha nilaya" /> */}
                        <div className="pImageFolder">
                            <OnGoingProject
                                data={newHouseNilaya} />
                        </div>
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>Kaveri Nilaya</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </div>

            </div>
        </>
    )
}