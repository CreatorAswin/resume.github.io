document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    // Navigation between sections
    const navLinks = document.querySelectorAll('.nav a, .mobile-menu a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Scroll to top of the section
            window.scrollTo({
                top: 100,
                behavior: 'smooth'
            });
        });
    });

    // Load content dynamically
    loadAboutContent();
    loadExperienceContent();
    loadEducationContent();
    loadSkillsContent();
    loadProjectsContent();
    loadContactContent();

    // Animate skill bars when skills section is visible
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(skillsSection);
});

// Dynamic content loading functions
function loadAboutContent() {
    const aboutContent = document.getElementById('about-content');
    
    aboutContent.innerHTML = `
  <div class="about-content-wrapper">
            <div class="about-img">
                <img src="https://avatars.githubusercontent.com/u/32889368?s=400&u=5e4cb7302de5e3927ce03d91c429a8e1c2d44ce6&v=4" alt="Profile Image">
            </div>
            <div class="about-text">
                <h2>About Me</h2>
                <p>Hello! I'm M. Aswini Kumar, an Assistant Professor and Full Stack Developer with extensive experience in both academia and industry. I specialize in Machine Learning, Deep Learning, and Web Technologies, with a passion for teaching and research.</p>
                <p>With a strong foundation in Computer Science and Engineering, I bring both theoretical knowledge and practical experience to my work. I'm dedicated to creating innovative solutions and mentoring the next generation of technologists.</p>
                <div class="about-info">
                    <div class="info-item">
                        <h4>Name:</h4>
                        <p>M. Aswini Kumar</p>
                    </div>
                    <div class="info-item">
                        <h4>Email:</h4>
                        <p>aswinikumar@cutmap.ac.in</p>
                    </div>
                    <div class="info-item">
                        <h4>Phone:</h4>
                        <p>+91 9059 287 397</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-actions-row">
            <a href="#" class="download-btn" id="download-resume">Download Resume</a>
            <a href="#" class="contact-btn" data-section="contact">Contact Me</a>
        </div>


    `;

    // Add event listener for download button
    document.getElementById('download-resume')?.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Resume download would start here!');
    });
}

function loadExperienceContent() {
    const experienceContent = document.getElementById('experience-content');
    
    experienceContent.innerHTML = `
        <h2>Work Experience</h2>
        <div class="experience-item">
            <div class="experience-header">
                <h3>Assistant Professor</h3>
                <span class="experience-date">2022 - Present</span>
            </div>
            <div class="experience-company">Centurion University of Technology and Management, Andhra Pradesh</div>
            <div class="experience-description">
                <p>Currently working as an Assistant Professor, focusing on teaching, mentoring, and research in areas such as Machine Learning, Deep Learning, and Web Technologies.</p>
                <ul>
                    <li>Responsible for curriculum design and academic planning</li>
                    <li>Guide student projects and research initiatives</li>
                    <li>Organize technical workshops and seminars</li>
                    <li>Contribute to academic excellence through innovative teaching methods</li>
                </ul>
            </div>
        </div>
        <div class="experience-item">
            <div class="experience-header">
                <h3>Full Stack Developer</h3>
                <span class="experience-date">2018 - 2021</span>
            </div>
            <div class="experience-company">SNIPE Tech Pvt. Ltd, Bangalore</div>
            <div class="experience-description">
                <p>Designed and developed web applications with full stack capabilities.</p>
                <ul>
                    <li>Designed and developed user authentication systems, including login and registration functionalities</li>
                    <li>Implemented role-based access controls to differentiate user permissions</li>
                    <li>Built and maintained responsive web applications using modern frameworks and technologies</li>
                    <li>Collaborated with cross-functional teams to ensure seamless integration of front-end and back-end systems</li>
                </ul>
            </div>
        </div>
        <div class="experience-item">
            <div class="experience-header">
                <h3>Team Leader</h3>
                <span class="experience-date">2016 - 2018</span>
            </div>
            <div class="experience-company">APSAC, Govt. of Andhra Pradesh</div>
            <div class="experience-description">
                <p>Led a team in digitization projects and technical implementations.</p>
                <ul>
                    <li>Developed and implemented strategies for achieving team goals efficiently</li>
                    <li>Provided training on FMB digitization using Collab Land software</li>
                    <li>Communicated clear instructions to team members and ensured effective participation</li>
                    <li>Managed software updates and monitored daily operations</li>
                    <li>Created reports on the team's progress and updated project managers</li>
                </ul>
            </div>
        </div>
        <div class="experience-item">
            <div class="experience-header">
                <h3>Junior Engineer</h3>
                <span class="experience-date">2012 - 2013</span>
            </div>
            <div class="experience-company">RailOne Pvt. Ltd, Hyderabad</div>
            <div class="experience-description">
                <p>Assisted in engineering projects with technical and supervisory responsibilities.</p>
                <ul>
                    <li>Assisted in communicating technical information between engineers and workforce</li>
                    <li>Guided and supervised the construction of bridges</li>
                    <li>Conducted surveys using leveling and Theodolite methods</li>
                    <li>Ensured timely completion of tasks and adherence to project specifications</li>
                </ul>
            </div>
        </div>
    `;
}

function loadEducationContent() {
    const educationContent = document.getElementById('education-content');
    
    educationContent.innerHTML = `
        <h2>Education</h2>
        <div class="education-item">
            <div class="education-header">
                <h3>M.Tech in Computer Science and Engineering</h3>
                <span class="education-date">2020 - 2022</span>
            </div>
            <div class="education-institution">Jawaharlal Nehru Technological University (JNTU), Kakinada</div>
            <div class="education-description">
                <p>Specialized in areas such as Software Engineering, Algorithms, Network Security, Distributed Systems, and Embedded Systems.</p>
                <p>Graduated with distinction and earned a Gold Medal for academic excellence.</p>
            </div>
        </div>
        <div class="education-item">
            <div class="education-header">
                <h3>B.Tech in Computer Science and Engineering</h3>
                <span class="education-date">2013 - 2016</span>
            </div>
            <div class="education-institution">CITM, Affiliated to JNTU Kakinada</div>
            <div class="education-description">
                <p>Focused on foundational and advanced topics in engineering, with a strong emphasis on problem-solving, design thinking, and technical innovation.</p>
                <p>Completed the degree with a distinction.</p>
            </div>
        </div>
        <div class="education-item">
            <div class="education-header">
                <h3>Diploma in Engineering</h3>
                <span class="education-date">2009 - 2012</span>
            </div>
            <div class="education-institution">State Board of Technical Education and Training (SBTET), Hyderabad</div>
            <div class="education-description">
                <p>Completed a comprehensive diploma program, gaining hands-on experience in technical and practical aspects of engineering and technology.</p>
            </div>
        </div>
    `;
}

function loadSkillsContent() {
    const skillsContent = document.getElementById('skills-content');
    
    skillsContent.innerHTML = `
        <h2>Skills</h2>
        <div class="skills-container">
            <div class="skill-category">
                <h3>Technical Skills</h3>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>Machine Learning</span>
                        <span>90%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="90"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>Deep Learning</span>
                        <span>85%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="85"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>Python</span>
                        <span>92%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="92"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>JavaScript</span>
                        <span>88%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="88"></div>
                    </div>
                </div>
            </div>
            <div class="skill-category">
                <h3>Web Development</h3>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>HTML5/CSS3</span>
                        <span>95%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="95"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>React.js</span>
                        <span>85%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="85"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>Node.js</span>
                        <span>80%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="80"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>MongoDB</span>
                        <span>78%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="78"></div>
                    </div>
                </div>
            </div>
            <div class="skill-category">
                <h3>Professional Skills</h3>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>Teaching/Mentoring</span>
                        <span>90%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="90"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>Research</span>
                        <span>85%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="85"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>Team Leadership</span>
                        <span>88%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="88"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <span>Project Management</span>
                        <span>83%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="83"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 100);
    });
}

function loadProjectsContent() {
    const projectsContent = document.getElementById('projects-content');
    
    projectsContent.innerHTML = `
        <h2>Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-img">
                    <img src="https://via.placeholder.com/400x300" alt="Academic Research Platform">
                </div>
                <div class="project-info">
                    <h3>Academic Research Platform</h3>
                    <p>A platform for academic collaboration and research paper management with machine learning recommendations.</p>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">Django</span>
                        <span class="project-tag">ML</span>
                    </div>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-img">
                    <img src="https://via.placeholder.com/400x300" alt="E-Learning System">
                </div>
                <div class="project-info">
                    <h3>E-Learning System</h3>
                    <p>A comprehensive learning management system with course creation, student tracking, and assessment tools.</p>
                    <div class="project-tags">
                        <span class="project-tag">React</span>
                        <span class="project-tag">Node.js</span>
                        <span class="project-tag">MongoDB</span>
                    </div>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-img">
                    <img src="https://via.placeholder.com/400x300" alt="FMB Digitization System">
                </div>
                <div class="project-info">
                    <h3>FMB Digitization System</h3>
                    <p>A system for digitizing field measurement books with data validation and reporting features.</p>
                    <div class="project-tags">
                        <span class="project-tag">Java</span>
                        <span class="project-tag">Spring Boot</span>
                        <span class="project-tag">GIS</span>
                    </div>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-img">
                    <img src="https://via.placeholder.com/400x300" alt="Smart Attendance System">
                </div>
                <div class="project-info">
                    <h3>Smart Attendance System</h3>
                    <p>Face recognition-based attendance system with real-time reporting and analytics.</p>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">OpenCV</span>
                        <span class="project-tag">Flask</span>
                    </div>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadContactContent() {
    const contactContent = document.getElementById('contact-content');
    
    contactContent.innerHTML = `
        <h2>Get In Touch</h2>
        <form class="contact-form" id="contact-form">
            <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Your Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group full-width">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" required>
            </div>
            <div class="form-group full-width">
                <label for="message">Your Message</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <div class="form-group full-width">
                <button type="submit" class="submit-btn">Send Message</button>
            </div>
        </form>
        <div class="contact-info">
            <h3>Contact Information</h3>
            <div class="contact-details">
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="contact-text">
                        <h4>Location</h4>
                        <p>Visakhapatnam, India</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-text">
                        <h4>Email</h4>
                        <p>aswinikumar@cutmap.ac.in</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div class="contact-text">
                        <h4>Phone</h4>
                        <p>+91 9059 287 397</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-globe"></i>
                    </div>
                    <div class="contact-text">
                        <h4>Website</h4>
                        <p>https://creatoraswin.github.io/aswin/</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Form submission
    document.getElementById('contact-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! In a real implementation, this would send the form data to a server.');
        this.reset();
    });
}