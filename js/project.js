// portfolio.js
const projects = [
    {
        id: 1,
        title: "Sneakerlah",
        technology: "React",
        image: "img/projects/sneakerlah.png",
        shortDescription: "Discover curated local fashion brands that blend style and exclusivity.",
        description: "Sneakerlah is your go-to online destination for discovering curated local fashion brands that blend style and exclusivity. The platform showcases unique and distinctive fashion pieces from homegrown brands, offering a curated selection that highlights local creativity and craftsmanship. Whether you're looking for standout sneakers or other fashionable items, Sneakerlah provides a convenient way to support and explore the best of local fashion all in one place.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://sneakerlah.com",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 2,
        title: "FlipBizz",
        technology: "React, GraphQL",
        image: "img/projects/flipbizz.png",
        shortDescription: "Platform for enhancing professional networking.",
        description: "Flipbizz is a platform designed to enhance your professional and social networking by analyzing your current network compatibility and offering personalized recommendations for new connections. It helps users evaluate their existing relationships and identifies opportunities to expand their network with tailored suggestions. By leveraging data-driven insights, Flipbizz enables you to optimize your connections and build a more effective and strategic network.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://www.flipbizz.com",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 3,
        title: "UN Questionnaire",
        technology: "React",
        image: "img/projects/un_questionnaire.png",
        shortDescription: "A tool designed to assess progress towards the Sustainable Development Goals (SDGs).",
        description: "The UN Questionnaire is a tool designed to assess progress towards the Sustainable Development Goals (SDGs). It provides a structured framework for evaluating various initiatives and projects based on their alignment with global sustainability objectives. By using this questionnaire, organizations and stakeholders can measure their contributions to sustainable development, identify areas for improvement, and ensure their efforts effectively support the broader goals of environmental, social, and economic sustainability.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://assessment.esghub.my",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 4,
        title: "Adignis",
        technology: "React, Vue, GraphQL",
        image: "img/projects/adignis.png",
        shortDescription: "An interactive review platform designed to deliver valuable insights and transparent feedback.",
        description: "Adignis is an interactive review platform designed to deliver valuable insights and transparent feedback for individuals, businesses, and organizations. By offering detailed and honest evaluations, ADIGNIS helps users make informed decisions and understand various entities clearly. Whether you're seeking to assess a product, service, or company, ADIGNIS provides a reliable source of information to guide your choices and enhance your decision-making process.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://adignis.com",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 5,
        title: "AFA Tournament",
        technology: "React",
        image: "img/projects/afa_tournament.png",
        shortDescription: "A competitive platform for organizing and engaging in tournaments.",
        description: "AFA Tournament offers an exciting competitive platform where participants can immerse themselves in thrilling gameplay. Designed for seamless connectivity, it provides a streamlined experience for organizing and engaging in tournaments. Whether you're a player or a fan, AFA Tournament ensures a rewarding and dynamic environment, enhancing the competitive spirit and enjoyment of the game.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://tournament.afa-sports.com",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 6,
        title: "AFA Kiosk",
        technology: "React",
        image: "img/projects/afa_kiosk.png",
        shortDescription: "An online court booking platform designed to promote active lifestyles.",
        description: "AFA Kiosk is an online court booking platform designed to promote active lifestyles by facilitating easy access to sports facilities. By streamlining the process of reserving court time, AFA Kiosk connects individuals and groups, making it simpler for them to engage in sports and physical activities. The platform aims to inspire and encourage a more active community by providing a convenient way to book courts and enjoy sports.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://book.afa-sports.com",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 7,
        title: "AFA Coaching",
        technology: "React",
        image: "img/projects/afa_coaching.png",
        shortDescription: "A platform to connect with seasoned coaches for personal and professional development.",
        description: "AFA Coaching offers a platform dedicated to helping individuals elevate their performance through expert guidance and continuous improvement. By connecting you with seasoned coaches, AFA Coaching provides personalized support to enhance your skills and achieve your goals. Whether you're aiming to advance in your career, improve your personal life, or reach new heights in any field, AFA Coaching ensures a journey of ongoing development and success.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://staging.coaching-website.afa-sports.com",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 8,
        title: "Idenfic",
        technology: "React, Vue",
        image: "img/projects/idenfic.png",
        shortDescription: "A mobile app to help verify the legitimacy of online sellers by checking their bank accounts.",
        description: "Idenfic is a mobile application available on the Google Play Store designed to help users verify the legitimacy of online sellers. If you're considering making an online purchase but have concerns about the seller’s background, Idenfic allows you to input a bank account number to check for any suspicious transactions. By partnering with local communities and regulators, Idenfic provides relevant information about bank accounts, helping you avoid potentially fraudulent deals and ensuring you don't miss out on reputable opportunities. Worked on Admin panel for this project.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://play.google.com/store/apps/details?id=com.onesoftlab.idenfic&hl=en",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 9,
        title: "Reskills",
        technology: "React, Vue",
        image: "img/projects/reskills.png",
        shortDescription: "A global online learning platform offering flexible learning opportunities.",
        description: "ReSkills is a global online learning platform designed to provide learners with the flexibility to acquire knowledge from anywhere at any time. Through their website, 'https://www.reskills.com/', ReSkills connects individuals with a wide range of educational resources and courses from around the world. The platform offers opportunities for personal and professional development, catering to various interests and skill levels. Whether you’re looking to advance your career or explore new subjects, ReSkills provides a comprehensive range of online learning options to help you achieve your goals.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://www.reskills.com",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 10,
        title: "TLB",
        technology: "React",
        image: "img/projects/tlb.png",
        shortDescription: "TLB Industry Sdn. Bhd. is a Malaysian company specializing in plastic packaging solutions.",
        description: "Tlb Industry Sdn. Bhd., headquartered in Bayan Lepas, Malaysia, operates in the Plastics Packaging Materials and Unlaminated Film and Sheet Manufacturing sector. Established on January 7, 2002, the company specializes in producing plastic packaging solutions. According to their latest financial report, Tlb Industry experienced a slight decline in net sales revenue by 3.31% in 2022, although their total assets grew by 8.75% during the same period. The company also saw a minor decrease in its net profit margin by 1.05% in 2022.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://www.tlb-group.com",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 11,
        title: "Pcoins",
        technology: "React",
        image: "img/projects/pcoins.png",
        shortDescription: "A Malaysian technology company offering various tech products and solutions.",
        description: "Pineapple is a Malaysian company that offers a diverse range of technology products and solutions. They specialize in providing and selling computers and accessories, office solutions, printing solutions, gaming products, multimedia devices, as well as networking and storage products. Their website likely features comprehensive information on their product offerings, including specifications and benefits, aimed at meeting various technology needs for both personal and professional use.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://pineapple.my",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 12,
        title: "Rezo",
        technology: "React",
        image: "img/projects/rezo.png",
        shortDescription: "A Malaysian firm that provides technology and digital solutions.",
        description: "Rezo, which can be explored at 'https://www.rezo.com.my/', is a Malaysian firm that provides technology and digitsal solutions. Their website likely outlines their offerings, such as web design, digital marketing, and IT consulting services. You may find examples of their work and the outcomes they've achieved in their portfolio. The site probably also includes details about the company’s background, team, and values, along with contact information for reaching out. Additionally, they might feature a blog or resource section with industry insights, advice, and updates.",
        links: [
            {
                text: "Visit Live Project",
                url: "https://www.rezo.com.my",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 13,
        title: "Smart Nurse",
        technology: "MERN Full Stack (MongoDB, Express, React, Node)",
        image: "img/projects/smart nurse.jpg",
        shortDescription: "A smart service by web application.",
        description: `It is a web based application made with MERN(MongoDB, Express, React, Node) Full Stack. It is a website related to helping people regarding medicines, letting them know their schedules of taking medicine, letting their parents know whether they are taking medicine in proper time or not etc. It has two visitor modes, One is Patient, Another is Guardian. If We create an account with patient mode, then we will be able to make a proper schedule about medicine and other stuff like exercise and taking foods as well. The app will respond according to our schedule or needs.
        <br />
        <br />
        And If we create an account with Guardian mode, then we will be able to make a proper schedule for our nearest and dearest one for taking medicine and other stuff like exercise and taking foods as well. The app will respond according to our schedule or needs.
        <br />
        <br />
        It’s more like a virtual nurse who will provide you with all the necessary things you need while you are feeling sick or you are in need of help.
        `,
        links: [
            {
                text: "Visit GitHub Repository",
                url: "https://github.com/SirRatul/ISD-Project",
                class: "btn-outline-success"
            },
            {
                text: "Visit Live Project",
                url: "https://smart-nurse-bd.web.app",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 14,
        title: "Teresa",
        technology: "MERN Full Stack (MongoDB, Express, React, Node)",
        image: "img/projects/teresa.jpg",
        shortDescription: "A smart service by web application.",
        description: `Teresa is a medication management service, specially designed to assist people taking medicine in time. Proper medication is very important to maintain healthcare tasks in line. A single medication mistake can leads to extra cost, decline in health condition and sometimes can kill!
        <br />
        <br />
        With the help of very user friendly technology through our mobile application and home device, patient can enable medication reminder, edit it and follow up till the course is complete. One of the beautiful aspects of teresa service is that it will allow multiple users to access and enable the reminder, patient can appoint guardian to take care of their routine medication management.
        <br />
        <br />
        On top of that, Teresa will help, guide for a complete medication journey for a patient, starting from selecting a doctor, appointment, medicine management including home delivery, diagnostic help all through integrated services.
        <br />
        <br />
        Teresa takes out the stresses to live a safer, healthier life of a patient, leads to reducing the cost of healthcare.`,
        links: [
            {
                text: "Visit GitHub Repository",
                url: "https://github.com/SirRatul/Teresa",
                class: "btn-outline-success"
            }
        ]
    },
    {
        id: 15,
        title: "Teresa App",
        technology: "React Native",
        image: "img/projects/teresa.jpg",
        shortDescription: "A mobile application.",
        description: `Teresa is a medication management service, specially designed to assist people taking medicine in time. Proper medication is very important to maintain healthcare tasks in line. A single medication mistake can leads to extra cost, decline in health condition and sometimes can kill!
        <br />
        <br />
        With the help of very user friendly technology through our mobile application and home device, patient can enable medication reminder, edit it and follow up till the course is complete. One of the beautiful aspects of teresa service is that it will allow multiple users to access and enable the reminder, patient can appoint guardian to take care of their routine medication management.
        <br />
        <br />
        On top of that, Teresa will help, guide for a complete medication journey for a patient, starting from selecting a doctor, appointment, medicine management including home delivery, diagnostic help all through integrated services.
        <br />
        <br />
        Teresa takes out the stresses to live a safer, healthier life of a patient, leads to reducing the cost of healthcare.
        `,
        links: [
            {
                text: "Visit GitHub Repository",
                url: "https://github.com/SirRatul/Teresa-App",
                class: "btn-outline-success"
            },
            {
                text: "Visit Live Project",
                url: "https://smart-nurse-bd.web.app",
                class: "btn-outline-danger"
            }
        ]
    },
    {
        id: 16,
        title: "Bangla Digit Recognition",
        technology: "Applied ML model & used numtadb dataset",
        image: "img/projects/bangla digit.png",
        shortDescription: "A Machine Learning model to detect bengali digit.",
        description: `It is an AI based project where it trains many images to identify the bengali number. There could be a lot of images with different handwriting, because we all have different handwriting patterns. With all the patterns out there,
        sometimes it’s hard to detect the real digit because there is some bad handwriting as well. So, This project is all about detecting handwritten digits. So we collected a huge
        amount of images with different handwriting and trained them. As a result we got a good accuracy when it comes to detecting the actual results.
        <br />
        <br />
        So, we made an UI where we can upload digits and it is responding as expected. So, it's about detecting bengali digits.
        `,
        links: [
            {
                text: "Visit GitHub Repository",
                url: "https://github.com/SirRatul/Bangla-Digit-Recognition",
                class: "btn-outline-success"
            }
        ]
    },
    {
        id: 17,
        title: "Predict Suicidal Thought",
        technology: "Applied ML model to detect suicidal thought",
        image: "img/projects/depression.png",
        shortDescription: "A Machine Learning model to detect suicidal thought of a drug addicted person",
        description: `Suicide is a leading cause of premature death in young generation. It is one of many real and potential consequences of addiction. Nowadays most people, especially the younger generation, fall into addiction easily. Drugs addiction makes suicide a real risk. Many risk factors for suicide in the general population apply to drug addicts. Affective disorders and depressed mood are risk factors for suicidal behavior in the general population and among addicts. Suicidal addicts tend to have certain emotional problems and behavioral problems that strongly affect their activities and the inability to control behavior.
        <br />
        <br />
        In this project, we have worked with the data of drug-addicted persons to develop a model that predicts if a drug-addicted person has suicidal thoughts or not.
        `,
        links: [
            {
                text: "Visit GitHub Repository",
                url: "https://github.com/SirRatul/Predict-Suicidal-Thought-of-a-Drug-Addicted-Person",
                class: "btn-outline-success"
            }
        ]
    },
    {
        id: 18,
        title: "Masked Face Detection",
        technology: "Applied CNN model to detect whether a person has worn a mask or not",
        image: "img/projects/mask.png",
        shortDescription: "A CNN model to detect whether a person has worn a mask or not.",
        description: `It is an AI based project where it detects if a person is putting on a mask or not. Nowadays, this world is suffering from COVID19 issues. One way it could be able to stay safe, and that is wearing a mask. And Sometimes people don’t actually wear masks and move outside. This is harmful for these people and the other peoples around him as well. So, we thought of detecting whether a person is wearing a mask or not.
        <br />
        <br />
        For that, we have collected numerous photos of collections as a dataset and trained those data using ML models. and finally we came up with good results. It can detect whether a person is wearing a mask or not.
        <br />
        <br />
        So, we made an UI where we can upload photos and it is responding as expected. So, it’s all about detecting whether a person is putting on a mask on his face or not.
        `,
        links: [
            {
                text: "Visit GitHub Repository",
                url: "https://github.com/SirRatul/Masked-Face-Detection",
                class: "btn-outline-success"
            }
        ]
    },
    {
        id: 19,
        title: "Chef Zilla",
        technology: ".NET and C# with maintaining MVC pattern",
        image: "img/projects/chef zilla.jpg",
        shortDescription: "An E-Commerce Website Using .Net MVC pattern.",
        description: `It is a web based project made by ASP .NET . There are so many E-Commerce websites out there where people can buy daily stuff. This is also an E-Commerce website but it has some unique features compared to other websites. In a normal E-commerce website we can buy daily stuff like random, and don't have any recommendations for specific recipes. On the other hand, on our website, people don’t need to select per item. We have recipe packages where people can find all the necessary items for a specific recipe. For example, if we want to make “X” recipes, we need to buy p,q,r,s items for that. So, people can select X recipes, and they will get all the items, they don’t need to add p,q,r,s items to their cart. and this is the uniqueness of our website.
        <br />
        <br />
        So, On our website people can buy stuff according to their recipes. They will find manuals inside of that having the proper instructions to cook that item.
        `,
        links: [
            {
                text: "Visit GitHub Repository",
                url: "https://github.com/SirRatul/Chef-Zilla",
                class: "btn-outline-success"
            }
        ]
    },
    {
        id: 20,
        title: "Cineplex Management System",
        technology: "JAVA Swing and SQL",
        image: "img/projects/cineplex.jpg",
        shortDescription: "A desktop application using JAVA Swing and SQL",
        description: `It is an web based project using JAVA SWING, SQL. Java is for backend and SQL for database. It is actually a database project where people can see the available tickets and purchase them according to their needs.
        <br />
        <br />
        It has some features. It has client side and admin side.
        <br />
        <br />
        For the admin side, we can add different movies. We can assign the schedule of these movies. We can add the availability for that particular schedule.
        <br />
        <br />
        For the client side, we can see what movies are running and what movies are upcoming. We can also see the availability of the tickets and purchase them as well.
        <br />
        <br />
        And we have a feature of generating tickets. If a person purchased a ticket then, he/she will download the copy of respective tickets as a pdf and print them.
        `,
        links: [
            {
                text: "Visit GitHub Repository",
                url: "https://github.com/SirRatul/Cineplex-Management-System",
                class: "btn-outline-success"
            }
        ]
    },
    {
        id: 21,
        title: "Coffe House",
        technology: "HTML, CSS, Bootstrap & PHP for backend",
        image: "img/projects/coffe.jpg",
        shortDescription: "An eCommerce website for Coffe shop developed with HTML, CSS, Bootstrap & PHP.",
        description: `It is a web based project using html, css, bootstrap, php.
            We have different items added to our websites and people can order them according to their preferences.
            <br />
            <br />
            We also have an admin panel where we can make changes to the frontend. We can add new items to that website. We can modify or update our items through admin. We can keep track who is ordering and how many orders are there in our shop.
            <br />
            <br />
            People can order coffee items through our website. They can choose whatever items they like.
            <br />
            <br />
            We can track them and provide them the proper services as well.
        `,
        links: [
            {
                text: "Visit GitHub Repository",
                url: "https://www.rezo.com.my",
                class: "btn-outline-success"
            }
        ]
    }
];

function generatePortfolio() {
    const portfolioContainer = document.querySelector('#portfolio .container .row');

    // Loop through the projects array and create HTML for each project
    projects.forEach(project => {
        // Create the column div
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-lg-4', 'col-sm-6', 'mb-4');

        // Create the portfolio item div
        const portfolioItemDiv = document.createElement('div');
        portfolioItemDiv.classList.add('portfolio-item');
        portfolioItemDiv.classList.add('h-100');

        // Create the anchor tag for the link
        const anchorTag = document.createElement('a');
        anchorTag.classList.add('portfolio-link');
        anchorTag.setAttribute('data-toggle', 'modal');
        anchorTag.setAttribute('href', `#portfolioModal${project.id}`);

        // Create the portfolio hover div
        const portfolioHoverDiv = document.createElement('div');
        portfolioHoverDiv.classList.add('portfolio-hover');
        const portfolioHoverContent = document.createElement('div');
        portfolioHoverContent.classList.add('portfolio-hover-content');
        const hoverText = document.createElement('p');
        hoverText.textContent = 'View Project Details';
        portfolioHoverContent.appendChild(hoverText);
        portfolioHoverDiv.appendChild(portfolioHoverContent);

        // Create the project image
        const projectImage = document.createElement('img');
        projectImage.classList.add('img-fluid');
        projectImage.setAttribute('src', project.image);
        projectImage.setAttribute('alt', project.title);

        // Append the hover div and image to the anchor tag
        anchorTag.appendChild(portfolioHoverDiv);
        anchorTag.appendChild(projectImage);

        // Create the portfolio caption div
        const portfolioCaptionDiv = document.createElement('div');
        portfolioCaptionDiv.classList.add('portfolio-caption');
        const portfolioCaptionHeading = document.createElement('div');
        portfolioCaptionHeading.classList.add('portfolio-caption-heading');
        portfolioCaptionHeading.textContent = project.title;
        const portfolioCaptionSubheading = document.createElement('div');
        portfolioCaptionSubheading.classList.add('portfolio-caption-subheading', 'text-muted');
        portfolioCaptionSubheading.textContent = project.technology;

        // Append the heading and subheading to the caption div
        portfolioCaptionDiv.appendChild(portfolioCaptionHeading);
        portfolioCaptionDiv.appendChild(portfolioCaptionSubheading);

        // Append the anchor tag and caption div to the portfolio item div
        portfolioItemDiv.appendChild(anchorTag);
        portfolioItemDiv.appendChild(portfolioCaptionDiv);

        // Append the portfolio item to the column div
        colDiv.appendChild(portfolioItemDiv);

        // Append the column div to the portfolio container
        portfolioContainer.appendChild(colDiv);
    });
}

// Function to generate modal HTML for each project
function generateModals() {
    const modalContainer = document.getElementById('modals-container');

    projects.forEach(project => {
        let modalHtml = `
                <div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="close-modal" data-dismiss="modal">
                                <img src="img/close-icon.svg" alt="Close modal" />
                            </div>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <div class="modal-body">
                                            <!-- Project Details -->
                                            <h2 class="text-uppercase">${project.title}</h2>
                                            <p class="item-intro text-muted">
                                                ${project.shortDescription}
                                            </p>
                                            <p class="text-justify">
                                                ${project.description}
                                            </p>
                                            <div class="d-flex justify-content-center">
                                                ${generateModalButtons(project.links)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        modalContainer.innerHTML += modalHtml;
    });
}

// Function to generate buttons inside each modal
function generateModalButtons(links) {
    return links.map(link => {
        const marginClass = links.length > 1 ? 'mr-2' : '';
        return `
                <a href="${link.url}" target="_blank" class="${marginClass}">
                    <button class="btn ${link.class}" type="button">${link.text}</button>
                </a>
            `;
    }).join('');
}


// Call generatePortfolio immediately after the script is parsed
document.addEventListener('DOMContentLoaded', generatePortfolio);

// Generate all modals when the document is ready
document.addEventListener('DOMContentLoaded', generateModals);