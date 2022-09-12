import React, { useState } from "react";

export default function TestHeader() {
    const menuItems = [
        {
            title: "Home",
            url: "#home",
            cName: "nav-link active",
            icName:"bi bi-house-fill me-2"
        },
        {
            title: "About",
            url: "#about",
            cName: "nav-link",
            icName:"bi bi-people-fill me-2"
        },
        {
            title: "Services",
            url: "#services",
            cName: "nav-link",
            icName:"bi bi-service-fill me-2"
        },
        {
            title: "Projects",
            url: "#projects",
            cName: "nav-link",
            icName:"bi bi-house-fill me-2"
        },
        {
            title: "Packages",
            url: "#pricing",
            cName: "nav-link",
            icName:"bi bi-house-fill me-2"
        },
        {
            title: "Contact",
            url: "#contact",
            cName: "nav-link",
            icName:"bi bi-telephone-fill me-2"
        },
        {
            title:"GET FREE CONSULTANT",
            url: "#contact",
            cName: "p2ButtonStyle btnwidth",
            icName:"bi bi-telephone-fill me-2"
        }
    ];

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return(
        <>
        <header className="header">
        <div>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <div class="d-flex">
            <a href="#home">
            <img src="images/newLogo.png"
             alt="logo" class="modal-sm w-50" />
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
            
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ">
                    <a href="##home" class="nav-item nav-link active headertextColor">Home</a>
                    <a href="#about" class="nav-item nav-link headertextColor">About</a>
                    <a href="#services" class="nav-item nav-link headertextColor">Services</a>
                    {/* <a href="#projects" class="nav-item nav-link headertextColor">Projects</a> */}
                    <li class="nav-item dropdown rounded">
                                 <a class="nav-link dropdown-toggle headertextColor" href="#home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-person-fill me-2"></i>Projects</a>
                                 <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                     <li><a class="dropdown-item headertextColor" href="#projects">Completed Projects</a></li>
                                     <li>
                                         <hr class="dropdown-divider" />
                                     </li>
                                     <li><a class="dropdown-item headertextColor" href="#onGoing">Onging Projects</a></li>
                                 </ul>
                             </li>
                    <a href="#pricing" class="nav-item nav-link headertextColor">Packages</a>
                    <a href="#contact" class="nav-item nav-link headertextColor">Contacts</a>
                </div>
                <div class="navbar-nav ms-auto">
                    <a href="#contact" class="nav-item nav-link p2ButtonStyle btnwidth headerButtonTextColor">GET FREE CONSULTANT</a>
                </div>
            </div>
        </div>
    </nav>
</div>
</header>
        </>
    )

}
//     return (
//         <>
//         <header className="header">
//             <nav class="navbar navbar-expand-lg">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="#home"></a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon">abc</span>
//                     </button>
                    
//                     <div class="collapse navbar-collapse" id="navbarNav">
//                         <ul class="navbar-nav ms-md-auto gap-2">
//                             {menuItems.map((item, index) => {
//                                 return (
//                                     <li key={index} className="nav-item rounded">
//                                         <a href={item.url} className={item.cName} aria-current="page">
//                                             <i class={item.icName}></i>
//                                             {item.title}
//                                         </a>
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     </div>
                  
//                 </div>
//             </nav>
//             </header>
//              <div class="vh-100 d-flex justify-content-center align-items-center">
//                 <h2>Main Content</h2>
//             </div>
//             <div class="bg-dark text-white">
//                 <p class="text-center p-4 m-0">Footer Content</p>
//             </div>
//         </>
//     );
// }
//     return (
//         <>
//             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="#home"></a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarNav">
//                         <ul class="navbar-nav ms-md-auto gap-2">
//                             <li class="nav-item rounded">
//                                 <a class="nav-link active" aria-current="page" href="#home"><i class="bi bi-house-fill me-2"></i>Home</a>
//                             </li>
//                             <li class="nav-item rounded">
//                                 <a class="nav-link" href="#home"><i class="bi bi-people-fill me-2"></i>About</a>
//                             </li>
//                             <li class="nav-item rounded">
//                                 <a class="nav-link" href="#home"><i class="bi bi-telephone-fill me-2"></i>Contact</a>
//                             </li>
//                             <li class="nav-item dropdown rounded">
//                                 <a class="nav-link dropdown-toggle" href="#home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-person-fill me-2"></i>Profile</a>
//                                 <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
//                                     <li><a class="dropdown-item" href="#home">Account</a></li>
//                                     <li><a class="dropdown-item" href="#home">Another action</a></li>
//                                     <li>
//                                         <hr class="dropdown-divider" />
//                                     </li>
//                                     <li><a class="dropdown-item" href="#home">Logout</a></li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }