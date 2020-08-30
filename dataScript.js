function getHome(){
	var finalStr="";
	var str=[];
	str[0]="<h3>Home Page</h3></br>Dr. Mohammed Golam Kaosar is currently working as an Assistant Professor in the Department of Computer Science in Effat University, Saudi Arabia. Prior to that, he used to work as a Lecturer in the School of Computing and Mathematics, Charles Sturt University, Australia. He also worked as a Research  Fellow  after  his completion  of  PhD  from  the  School  of  Engineering  and  Science, Victoria  University  Melbourne,  Australia.  Prior  to  that,  Mr. Kaosar  finished  his  MS  in  Computer  Engineering  and   BSc  in Computer  Science  and  Engineering in 2006 and 2001. Previously,  he  used  to  work  in  the  Research  institute  (RI), KFUPM,  KSA.  Mr. Kaosar is member of various professional organizations including IEEE, EAI etc. He is also a dedicated reviewer, member and editor of various conferences and journals.";
	str[1]="";
	finalStr=str[0]+str[1];
	return finalStr;
}
function getCVHead_short(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="";//<h3>CURRENT POSITION</h3></br>";
	str[1]="";
	
	str[c++]="<b>Assistant Professor</b> </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp Department of Computer Science</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Faculty of Engineering, Effat University</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jeddah, KSA</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PO Box 34689, Jeddah 21478, Saudi Arabia</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: mgkr14@gmail.com, mkaosar@effatuniversity.edu.sa</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mob:+966-538194596</br>";
	//str[c++]="<b>Assistant Professor</b>, Department of Computer Science</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faculty of Engineering, Effat University, Jeddah, KSA</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PO Box 34689, Jeddah 21478, Saudi Arabia</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: mgkr14@gmail.com, mkaosar@effatuniversity.edu.sa, Mob:+966-538194596</br>";
	
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+str[i];
	}
	return finalStr;
}

function getStrength(){
	var finalStr="";
	var str=[];
	str[0]="<h3>STRENGTHS</h3></br>";
	str[1]="";
	str[2]="Demonstrated teaching experience in Computer Science and Engineering, especially for courses relating to Cyber Security, Information Security & Privacy, Human Computer Interaction, Database, Programming Languages, Moble Application Development, etc."
	str[3]="Demonstrated research experience in information cyber security and privacy, cryptography, wireless ad-hoc network, computer network and data mining."
	str[4]="Demonstrated track record of publications in journals and conferences of international standard."
	str[5]="A solid foundation in computer science with strong background in mathematics."
	str[6]="Excellent communication skills developed through research and academic experience at tertiary level."

		
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i];
	}
	return finalStr;
}



function getCVHead(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>CURRENT POSITION</h3></br>";
	str[1]="";
	
	str[c++]="<b>Assistant Professor</b>  </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp Department of Computer Science</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Faculty of Engineering, Effat University</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jeddah, KSA</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PO Box 34689, Jeddah 21478, Saudi Arabia</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: mgkr14@gmail.com, mkaosar@effatuniversity.edu.sa</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mob:+966-538194596</br>Nationality: Australia &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date of birth: 24 Nov 1976</br>";
	str[c++]="</br><b>Responsibilities and Activities </b>(Apart from teaching and research):";	
	str[c++]="<li>Secretary General of the department</li>";
	str[c++]="<li>Members and Chair of various standing committees</li>";
	str[c++]="<li>Coach for Programming Competition Team</li>";
	str[c++]="<li>Moderator, Competitive Programming Club</li>";
	str[c++]="<li>Moderator, App Development Club</li>";
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+str[i];
	}
	return finalStr;
}
function getCareer(){
	var finalStr="";
	var str=[];
	str[0]="<h3>CAREER OBJECTIVE</h3></br>";
	str[1]="To retain an academic position in a university that provides opportunity to build and apply the knowledge in the field of computer science where the vehicle is high quality teaching and cuttingedge research.";
		
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+str[i];
	}
	return finalStr;
}
function getAcademicQualification(){
	var finalStr="";
	var str=[];
	str[0]="<h3>ACADEMIC QUALIFICAION</h3></br>";
	str[1]="";
	str[2]="<b>PhD in Computer Science(in 2011)</b><li style=\"margin-left:20px; \">University: School of Engineering and Science, Victoria University, Australia</li><li style=\"margin-left:20px; \">Thesis Title: Privacy Preserving Protocols for Association Rule Mining using Cryptographic Techniques</li>";
	str[3]="<b>MS in Computer Engineering(in 2006)</b><li style=\"margin-left:20px; \">University: Department of Computer Engineering, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</li><li style=\"margin-left:20px; \">Thesis Title: VoIP in Ad-hoc Network</li>";
	str[4]="<b>B.Sc. Engg. in Computer Science and Engineering(in 2001)</b><li style=\"margin-left:20px; \">University: Department of Computer Science and Engineering, Bangladesh University of Engineering and Technology (BUET), Bangladesh</li><li style=\"margin-left:20px; \">Thesis Title: Study of read, write and caching policy of proxy server</li>";
		
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+str[i];
	}
	return finalStr;
}
function getResearchInterest(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>RESEARCH INTEREST</h3></br>";
	str[1]="Areas of my research interest include but not limited to:";
	
	str[c++]="Cyber Security";
	str[c++]="Information Security, Privacy and Cryptography";	
	str[c++]="Internet of Things";
	str[c++]="Data Mining and Data Science";
	str[c++]="Wireless Ad-hoc Network";	
	str[c++]="Computer Network";
	
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i]+"</li>";
	}
	return finalStr;
}

function getWorkExperience(){
	var finalStr="";
	var str=[];
	str[0]="<h3>WORK EXPERIENCE</h3></br>";
	str[1]="";
	/*str[2]="<b>Position - Assistant Programmer</b><li style=\"margin-left:20px; \">Organization - Beximco Computers Ltd., Dhaka, Bangladesh </br><li style=\"margin-left:20px; \">Duration - 2001-2002 </br><li style=\"margin-left:20px; \">Responsibility - In this position, I was involved in software development and coding (using Developer 2000 and Oracle)";
	str[3]="<b>Position - Lecturer (part-time)</b><li style=\"margin-left:20px; \">Universities - Dhaka International University, Queens University, Ahsanullah University of Science and Technology, Bangladesh</br><li style=\"margin-left:20px; \">Duration - 2002-2004 </br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught: Java, Prolog, Object Oriented Programming (C++), Assembly Language, Digital Logic Design, Operating System.";
	str[4]="<b>Position - Lecturer</b><li style=\"margin-left:20px; \">University - Department of Computer Science and Engineering, The Peoples University of Bangladesh, Bangladesh</br><li style=\"margin-left:20px; \">Duration - 2001-2002 </br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught: Computer Architecture, Operating System, Information System Design Lab, Programming Language I (C), Object Oriented Programming (C++) Lab, Computer Networking.";
	str[5]="<b>Position - Lecturer</b><li style=\"margin-left:20px; \">University - Department of Computer Science and Engineering, Asian University of Bangladesh (AUB), Bangladesh</br><li style=\"margin-left:20px; \">Duration - 2003-2004 </br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught: Operating System, Computer Networking, Information System Design, Information System Design Lab, Programming Language I (C), Object Oriented Programming (C++), C++ Lab, Java.";
	str[6]="<b>Position - Research Assistant</b><li style=\"margin-left:20px; \">University - Department of Computer Engineering, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</br><li style=\"margin-left:20px; \">Duration - 2004-2006 </br><li style=\"margin-left:20px; \">Responsibility - During this period, I completed my MS in Computer Engineering. I also used to work as a team member in various academic projects. Other responsibilities include - conducting lab courses, class tests, homework and assignment marking etc.";
	str[7]="<b>Position - Network Analyst</b><li style=\"margin-left:20px; \">Organization - Research Institute (RI), King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</br><li style=\"margin-left:20px; \">Duration - 2006-2008 </br><li style=\"margin-left:20px; \">Responsibility - I used to perform research and development activities in academic and commercial IT projects. I gathered the experience of writing project proposal, technical memorandum and project progress report. I also was in charge of some sophisticated network equipments used in various laboratories.";
	str[8]="<b>Position - Lecturer (part-time)</b><li style=\"margin-left:20px; \">University -  Department of Computer Science, Arab Open University (AOU), Saudi Arabia</br><li style=\"margin-left:20px; \">Duration - 2006-2008 </br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught - Object Oriented Programming (C++ & Java), Senior Software Development Project, Information and Communication Technology, Foundations of Computer Science.";	
	str[9]="<b>Position - Sessional Instructor</b><li style=\"margin-left:20px; \">University -  School of Engineering and Science, Victoria University, Australia</br><li style=\"margin-left:20px; \">Duration - 2009-2011(During PhD) </br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught - Engineering Mathematics 1A, Semester 2, 2009 and Network Security in Semester 2, 2011.";
	str[10]="<b>Position - Research Fellow</b><li style=\"margin-left:20px; \">University -  School of Engineering and Science, Victoria University, Australia</br><li style=\"margin-left:20px; \">Duration - 2011-2012</br><li style=\"margin-left:20px; \">Responsibility - Worked in projects: (1) \Private Data Warehouse Query\ and (2)\"Privacy Protection in Distributed Data Mining\" both are ARC (Australian Research Council) discovery projects.";
	str[11]="<b>Position - Lecturer </b> (equivalent to Assistant Professor)</br><li style=\"margin-left:20px; \">University -  School of Computing and Mathematics, Charles Sturt University, Australia</br><li style=\"margin-left:20px; \">Duration - Jan 2013- July 2014</br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught - Programming C++, Programming Java, Computer Vision,Web Based Information Systems, Research Project in IT etc. Other responsibilities - Course design, Course coordination, Supervising PhD students, Research committee member, Marketing committee member etc.";
	str[12]="<b>Position - Assistant Professor</b><li style=\"margin-left:20px; \">University -  Department of Computer Science Effat University, Saudi Arabia</br><li style=\"margin-left:20px; \">Duration - July 2014 - Date</br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught - Human Computer Interface, Algorithm Analysis, Data Structure and Algorithm Design, Digital Skill, Information Security,  Research Seminar Programming Languages( Java C++), Software Engineering etc.</br><li style=\"margin-left:20px; \">Others - Department and college committees, Research committee, Mentoring programming clubs, Coaching students for programming ompetitions etc.";
		*/
	str[2]="<b>Before PhD</b>(2001-2008)<li style=\"margin-left:20px; \">Arab Open University, KSA</br><li style=\"margin-left:20px; \">Research Institute, KFUPM, KSA </br><li style=\"margin-left:20px; \">Asian University, Bangladesh</br><li style=\"margin-left:20px; \">People's University, Bangladesh</br><li style=\"margin-left:20px; \">Queens University, Bangladesh</br><li style=\"margin-left:20px; \">Beximco Computers, Bangladesh";
	str[3]="<b>Position - Sessional Instructor</b><li style=\"margin-left:20px; \">University -  School of Engineering and Science, Victoria University, Australia</br><li style=\"margin-left:20px; \">Duration - 2009-2011(During PhD) </br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught - Engineering Mathematics 1A, Semester 2, 2009 and Network Security in Semester 2, 2011.";
	str[4]="<b>Position - Research Fellow</b><li style=\"margin-left:20px; \">University -  School of Engineering and Science, Victoria University, Australia</br><li style=\"margin-left:20px; \">Duration - 2011-2012</br><li style=\"margin-left:20px; \">Responsibility - Worked in projects: (1) \Private Data Warehouse Query\ and (2)\"Privacy Protection in Distributed Data Mining\" both are ARC (Australian Research Council) discovery projects.";
	str[5]="<b>Position - Lecturer </b> (equivalent to Assistant Professor)</br><li style=\"margin-left:20px; \">University -  School of Computing and Mathematics, Charles Sturt University, Australia</br><li style=\"margin-left:20px; \">Duration - Jan 2013- July 2014</br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught - Programming C++, Programming Java, Computer Vision,Web Based Information Systems, Research Project in IT etc. Other responsibilities - Course design, Course coordination, Supervising PhD students, Research committee member, Marketing committee member etc.";
	str[6]="<b>Position - Assistant Professor</b><li style=\"margin-left:20px; \">University -  Department of Computer Science Effat University, Saudi Arabia</br><li style=\"margin-left:20px; \">Duration - July 2014 - Date</br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught - Mobile App Development, Human Computer Interface, Algorithm Analysis, Data Structure and Algorithm Design, Digital Skill, Information Security,  Research Seminar Programming Languages( Java C++), Software Engineering etc.</br><li style=\"margin-left:20px; \">Others - Department and college committees, Research committee, Mentoring programming clubs, Coaching students for programming ompetitions etc.";
		
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=n-1; i>=2;i--)
	{
		finalStr=finalStr+str[i]+"</br>";
	}
	return finalStr;
}

function getProfessionalAffiliation(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>PROFESSIONAL AFFILIATIONS AND ACTIVITIES</h3></br>";
	str[1]="";	
	str[c++]="Member: IEEE, European Alliance for Innovation (EAI), The Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (ICST)";
	//str[c++]="Member, Centre for Research in Complex Systems (CRICS), Charles Sturt University, Australia";
	//str[c++]="Member, ICT Security Group, Charles Sturt University, Australia";
	//str[c++]="Member, Advanced Network Research Lab (ANRL) Group, Charles Sturt University, Australia";
	str[c++]="Editorial Board Member: International Journal in Foundations of Computer Science and Technology (IJFCST)";
	str[c++]="Program committee: Learning and Teaching Conference, Effat University, 2015-2019; International Workshop on Applications and Techniques in Information Security (ATIS), 2013";
	str[c++]="Reviewer: ATIS2013, NSS2013, SCI 2005, SCI 2006, Journal of KSU-CIS, Journal of Biomedical Informatics, Journal of Computers (JCP) etc.";
			
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li>"+str[i]+"</li>";
	}
	return finalStr;
}
function getCSUAchievement(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>ACHIEVEMENTS WHILE AT CSU, AUSTRALIA (2013-2014)</h3></br>";
	str[1]="";	
	str[c++]="<b>Teaching:</b> I have taught more than five different subjects in undergraduate and postgraduate level in more than 12 cohorts with satisfactory student feedback.";	
	str[c++]="<b>Research:</b> 2 papers published, 2 accepted, 5 submitted, 2 research grant application was in progress, few research collaborations in national and international level was in progress, was supervising DIT students etc.";
	str[c++]="<b>Professional Development:</b>Have completed several professional courses such as, Learning and Teaching at CSU, Introduction to CSU Risk Management, Privacy Policy at Teaching, Online Copyright Training for Academic Staff, Research Higher Degree (RHD) Supervision etc.";
	str[c++]="<b>Others:</b>Designed a new subject ITC209 to be offered in 2015, moderated and OCI-fied several subjects, presented some research works in symposium and conference etc.";
	
			
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li>"+str[i]+"</li>";
	}
	return finalStr;
}
function getProfessionalCertifications(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>PROFESSIONAL TRAINING AND CERTIFICATIONS</h3></br>";
	str[1]="";
	
	str[c++]="The Complete Angular Course: Beginner to Advanced, Udemy (On-going)";
	str[c++]="Ionic 2/ Ionic 3 - Build iOS & Android Apps with Angular, Udemy (On-going)";
	str[c++]="Ethics and Equal Rights at Workplace, VU, Australia";
	str[c++]="Learning and Teaching at CSU, Australia";
	str[c++]="Occupational Health and Safety Online Training, VU, Australia";
	str[c++]="Equal Opportunity Online Training, VU, CSU";
	str[c++]="Introduction to CSU Risk Management, CSU, Australia";
	str[c++]="Privacy Policy at Teaching, CSU, Australia";
	str[c++]="Online Copyright Training for Academic Staff, CSU, Australia";
	str[c++]="Research Higher Degree (RHD) Supervision, CSU, Australia";

	
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i]+"</li>";
	}
	return finalStr;
}

function getPresentations(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>SEMINARS/WORKSHOPS/PRESENTATIONS</h3></br>";
	str[1]="The list of presentations and talks includes but not limited to:";
	
	str[c++]="\nPrivacy Preserving Participatory Sensor Network in Intelligent Rescue systemk\", The Center of Excellence in Intelligent Engineering Systems (CEIES), King AbdulAziz University, Jeddah Saudi Arabia, Dec, 2016";
	str[c++]="\"Backtracking Based Integer Factorization, Primality Testing and Square Root Calculation\", The Fourth International conference on Computer Science and Information Technology (CCSIT 2014), 21-22 February 2014, Sydney, Australia";
	str[c++]="\"(k-n) Oblivious Transfer using Fully Homomorphic Encryption System\", 9th International Conference on Security and Privacy in Communication Networks (SecureComm - ATIS 2013), Sydney, Australia, Sep 25-27";
	str[c++]="\"Basic Techniques of Information Privacy and some Applications\", 2nd ICT Security Symposium 2013, CSU, Australia, Sep 2013";
	str[c++]="\"Computer Science Research Trend\", Hajee Mohammad Danesh Science and Technology University (HSTU) Bangladesh, April 2012";
	str[c++]="\"Optimized two Party Privacy Preserving Association Rule Mining using Fully Homomorphic Encryption\", 11th International Conference on Algorithms and Architecture for Parallel Processing (ICA3PP-11), Oct. , 2011, Melbourne, Australia";
	str[c++]="\"Distributed Association Rule Mining with Minimum Communication Payload\", The Australasian Data Mining Conference (AusDM 2009), Dec. 2009, Melbourne, Australia";
	str[c++]="\"Research in Display\", Victoria University, Melbourne, Australia, 2009";
	str[c++]=" \"Privacy Preserving Protocols for Association Rule Mining using Cryptographic Techniques\", Candidature Proposal, Victoria University, Melbourne, Australia, 2008";
	str[c++]="\"State of the art, Privacy Preserving Data Mining\", Victoria University, Melbourne, Australia, 2009";
	str[c++]="\"VoIP in Ad-Hoc Network\", MS thesis defense, KFUPM, Saudi Arabia, 2006";
	str[c++]="\"Performance Improvement of Dynamic Source Routing Protocol Considering the Mobility Effect of Nodes in Cache Management\", The third IEEE and IFIP International Conference on wireless and Optical Communications Networks (WOCN 2006), Apr., 2006, Bangalore, India";
	str[c++]="\"A Novel Solution Towards the N-Queen problem\", Computer Engineering Department, KFUPM, Saudi Arabia, 2005";
	

	
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i]+"</li>";
	}
	return finalStr;
}
function getAwards(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>AWARDS AND APPRECIATIONS</h3></br>";
	str[1]="";
	
	str[c++]="Best Student Support Award, Effat University 2016-2017, Jeddah, Saudi Arabia";
	str[c++]="Best Research Publication of the Year 2013-2014, Charles Sturt University, Australia";
	str[c++]="The Maker Space: From Imagining to Making, 14th Learning and Teaching COnference 2017, Certificate of Appreciation, Effat University, Jeddah, Saudi Arabia";
	str[c++]="1st Workshop on WiMax Technology 2007, Certificate of Appreciation and Attendance, Center for Communication and Computer Research, KFUPM, Saudi Arabia";

	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i]+"</li>";
	}
	return finalStr;
}
function getTeachingActivities(){
	var finalStr="";
	var str=[];
	str[0]="<h3>TEACHING ACTIVITIES</h3></br>";
	str[1]="I have taught number of courses in several universities. A short list includes but not limited to as follows:";
	str[10]="<u>Effat University</u>, KSA: Human Computer Interface, Algorithm Analysis, Information Security, Digital Skill, Programming Languages, Data Structure and Algorithm	Design, Research Seminar, Capstone Projects etc.";
	str[9]="<u>Charles Sturt University</u>, Australia: Mobile Application Development, Management and Information Security, Information Technology Project Management, Research Project Plan in IT, Computer Vision, Web Based	Information Systems, Programming in Java 2, C++ Programming Techniques";
	str[8]="<u>Victoria University</u>, Australia: Network Security (Practical), Engineering Mathematics (Sessional)";
	str[7]="<u>Arab Open University</u>, KSA: Senior Software Development Project, Object Oriented Programming with C++ and Java, Computer Fundamentals";
	str[6]="<u>Asian University</u>, Bangladesh: Operating System, Networking, Information System Design, Object Oriented Programming (C++), Software Development Project, Senior Project (Information System Design)";
	str[5]="<u>People's University</u>, Bangladesh: Computer Architecture, Database";
	str[4]="<u>Dhaka International University</u>, Bangladesh:, Programming Language I, Object Oriented Programming (C++),	Assembly Language";
	str[3]="<u>Ahsanullah University of Science & Technology</u>, Bangladesh: JAVA";
	str[2]="<u>Queen's University</u>, Bangladesh: Prolog, Digital Logic Design";


	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=n-1; i>=2;i--)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i]+"</li>";
	}
	return finalStr;
}
function getTeachingInterests(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>TEACHING PREFERENCE</h3></br>";
	str[1]="I have taught number of courses in several universities. I can teach any Computer Science related courses. A short list of my teaching preference is as follows:";
	str[c++]="Web Application Design";
	str[c++]="Mobile Application Design";
	str[c++]="Programming Languages";
	str[c++]="Data Structure";
	str[c++]="Algoruthm Analysis and Design";
	str[c++]="Information Security, Cryptography";
	str[c++]="Cloud Computing";
	

	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i]+"</li>";
	}
	return finalStr;
}
function getCurrentResearch(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>CURRENT RESEARCH</h3></br>";
	str[1]="Some of my current research projects and topics include but not limited to:";
	str[c++]="Web Application Design";
	str[c++]="Mobile Application Design";
	str[c++]="Programming Languages";
	str[c++]="Data Structure";
	str[c++]="Algoruthm Analysis and Design";
	str[c++]="Information Security, Cryptography";
	str[c++]="Cloud Computing";
	

	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=n-1; i>=2;i--)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i]+"</li>";
	}
	return finalStr;
}
function getResearchCurrent(){
	var finalStr="";
	var str=[];
	str[0]="<h3>Current Projects</h3></br>";
	str[1]="";
	var c=2;
	str[c++]="<b>KACST Project</b>: Statistical Thermodynamics and Shale Reservoir Multiscale Simulation. (under review)";
	str[c++]="<b>EFFAT internal research grant</b>: Privacy Preserving Data Mining in Cloud Computing Using Homomorphic Encryption. (Abstract accepted)";
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li>"+str[i]+"</li>";
	}
	return finalStr;
}
function getResearchActivities(){
	var finalStr="";
	var str=[];
	str[0]="<h3>Past Projects</h3></br>";
	str[1]="";
	str[2]="<b>Project Title:</b> Airline Reservation System (2007, Role - Programmer)</br><li>Synopsis: Facilitates passengers to make reservation through mobile or pocket PC regardless of their locations. Two ends were involved in this system. The mobile end was developed using J2ME and the gateway and the server end were developed using Java and Oracle</li><li>Organization: Research Institute, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</li>";
	str[3]="<b>Project Title:</b> Pocket Quran (2008, Role - Programmer (Software development for mobile devices))</br><li>Synopsis: Software development for pocket PC and mobile devices to display the Holy Quran with various browsing options. J2ME and Microsoft .net were used as the development tool.</li><li>Organization: Research Institute, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</li>";
	str[4]="<b>Project Title:</b> BexiBank (2001, Role - System Analyst and Programmer)</br><li>Synopsis: Development of an application for a complete banking system. It is considered as one of the leading product in this area in Bangladesh. Oracle and developer 2000 had been used as development tools.</li><li>Organization: Beximco Computers Ltd. Dhaka, Bangladesh.</li>";
	str[5]="<b>Project Title:</b>  Automatic Vehicle Locator(AVL) (2007-8, Role - Programmer (Software development in the mobile and pocket PC end))</br><li>Synopsis: The objective of the project is to enable a pocket PC or a Javaenabled mobile phone to locate a	particular vehicle and display its exact location in the map. J2ME and Microsoft .net were used as the development tool in this project.</li><li>Organization: Research Institute, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia.</li>";
	str[6]="<b>Project Title:</b>  Privacy Protection in Distributed Data Mining (2008-10, Role - Research Fellow)</br><li>Synopsis: : Distributed data mining applications, such as those dealing with health care finance, counterterrorism	and homeland defence, use sensitive data from distributed data sets held by different parties. This	solution comes into direct conflict with an individual's need right for privacy. This project aims of studying	techniques to protect privacy in distributed data mining. The significance of this project is to keep privacy of	each distributed dataset and meanwhile share gains from distributed data mining.</li><li>Organization: School of Engineering and Science, Victoria University, Australia.</li>";
	str[7]="<b>Project Title:</b>  Private Data Warehouse Query (2009-11, Role - Post-Doc Research Fellow)</br><li>Synopsis:  Information and Communications Technology (ICT) has dramatically altered the world's social and	economic landscape. 'From data to knowledge' is one of priority challenges recognized by National ICT	Australia. However, privacy concern may prevent it from realization. This project aims to fulfil 'from data to	knowledge' without breaching privacy of user's queries to a data warehouse. The outcomes of this project is to	create new directions in the research of private data warehouse query, and are applicable to stock exchange	data warehouses and pharmaceutical data warehouses, where the user is reluctant to reveal his query to the	data warehouse operator.</li><li>Organization: School of Engineering and Science, Victoria University, Australia.</li>";

	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=n-1; i>=2;i--)
	{
		finalStr=finalStr+str[i];
	}
	return finalStr;
}
function getJournalPapers(){
	var finalStr="";
	var str=[];
	str[0]="<h3>Journals</h3></br>";
	str[1]="";
	str[2]="M. G. Kaosar, \"Finding Multiple Solutions from a Single Solution of N-queen Problem\", PCTE Journal of Computer Sciences, 2005, December, Vol. 1, Issue 2, Jul-Dec.";
	str[3]="M. G. Kaosar, \"Shortest and Simplest Solutions for N-Queen Problem\", PCTE Journal of Computer Sciences, 2006, December, Vol. 2, Issue 2 Jul-Dec"
	str[4]="T. R. Sheltami, M. G. Kaosar, \"Improved Caching Mechanism for Ad-hoc Network Routing Protocol\", PCTE Journal of Computer Sciences, 2006, December, Vol. 2, Issue 2 Jul-Dec";
	str[5]="M. G. Kaosar, T. R. Sheltami, \"Voice Transmission over Ad-Hoc Network Adapting Optimum Approaches to Maximize the Performance\", Computer Communications, 2008. doi:10.1016/j.comcom.2008.11.028";
	str[6]="M. G. Kaosar, X. Yi, \"Privacy Preserving Association Rule Mining in Ubiquitous Computing Environment\", Ubiquitous Computing and Communication Journal (UBICC), 2010, Volume 5, ISSN Online 1992-8424, ISSN Print 1994-4608, 2010";
	str[7]="M. G. Kaosar, X. Yi, \"Semi-Trusted Mixer Based Privacy Preserving Distributed Data Mining for Resource Constrained Devices\", International Journal of Computer Science and Information Security (IJCSIS), 2010, April, vol - 8, no - 1, pp. 44-51.";
	str[8]="M. G. Kaosar, X. Yi, \"Secure Two-Party Association Rule Mining Based on One-pass FP-Tree\", International Journal of Information Security and Privacy (IJISP), 2011, vol-5, issue 2, pp. 13-32, January.";
	str[9]="M. G. Kaosar, Russell Paulet, X. Yi, \"Fully Homomorphic Encryption Based Two Party Association Rule Mining\", journal of Data & Knowledge Engineering (DKE), 2012, March, http://dx.doi.org/10.1016/j.bbr.2011.03.031";
	str[10]="X. Yi, M. G. Kaosar; R. Paulet, E. Bertino, \"Single-Database Private Information Retrieval from Fully Homomorphic Encryption\", Transactions on Knowledge and Data Engineering (TKDE), vol.25, no.5, pp.1125-1134, May 2013";
	str[11]="R. Paulet, M. Kaosar, X. Yi E. Bertino, \"Privacy Preserving and Content Protecting Location Based Queries\", IEEE Transactions on Knowledge and Data Engineering(TKDE), vol.99, no pre-print, ISSN: 10414347, 2013";	
	str[12]="Q. Mamun, M. Kaosar, R. Islam \"Secured Communication Key Establishment for Cluster based Wireless Sensor Networks\", International Journal of Wireless Networks and Broadband Technologies (IJWNBT), 2014";
	str[13]="Q. mamun, R. Islam, M. Kaosar, \"Anomaly Detection in Wireless Sensor Networks\", Journal of Networks (JNW, ISSN 17962056), 2014.";
	str[14]="M. Kaosar, Q. Mamun, \"Privacy Preserving Interest Group Formation in Online Social Networks (OSNs) using Fully Homomorphic Encryption\", Journal of Information Privacy and Security (JIPS), 2014, doi = {10.1080/15536548.2014.912909}.";
	str[15]="Abdulatif, M. Kaosar, \"Privacy Preserving Cloud Computation using Domingo Ferrer Scheme\" Journal of King Saud University Computer and Information Sciences Volume 28, Issue 1, January 2016, Pages 27-36";
	str[16]="Adel Binajjaj, Tarek Sheltami, Farouq Aliyu, Mohammed Kaosar, \"Design and Implementation of a Wearable Gas Sensor Network for Oil and Gas Industry Workers\" Journal of Computers Volume 13, Number 3, March 2018, Pages 300-308, doi: 10.17706/jcp.13.3.300-308";
	//str[17]="Mohammed Kaosar, \"Oblivious DaaS type Cloud using Binary Search Tree\" Journal of Computers in Human Behavior, March 2018 [Submitted]";
	//str[18]="Shaima Albugami, Baraa Arief, Mohammed Kaosar, \"Privacy Statement Regulating Based on User Preferences Using Document Mining\" International Journal of Security, Privacy and Trust Management ( IJSPTM), April 2018 [Accepted]";
	//str[17]="Long Doan, Rahman Ahmed, Mohammed Kaosar, \"Effect of density ratio on the dispersion of particles in a Submerged Liquid Jet\", Journal of Fluid, Octoberm 2018 [Submitted]";
	str[17]="C. Trang, R. Ahmed, M. Kaosar, \"Liquid Water Film on the Outer Surface of a Half-Submerged Rotating Drum\", Journal of Plastic Film & Sheeting, February, 2019";
			
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=n-1; i>=2;i--)
	{
		finalStr=finalStr+"<li>"+str[i]+"</li>";
	}
	return finalStr;
}
function getBookChapters(){
	var finalStr="";
	var str=[];
	str[0]="<h3>Book Chapters</h3></br>";
	str[1]="";
	str[2]="M. G. Kaosar, X. Yi, \"Privacy Preserving Data Gathering in Wireless Sensor Networks\", Ch.12, pp. 237-251, Book: Network Security, Administration and Management, ISSN: 9781609607777, pub. IGI Global, 2011.";
	str[3]="Q. Mamun, R. Islam, and M. Kaosar, \"Ensuring data integrity by anomaly node detection during data gathering in	wsns\" in Security and Privacy in Communication Networks, ser. Lecture Notes of the Institute for Computer Sciences,Social Informatics and Telecommunications Engineering, T. Zia, A. Zomaya, V. Varadharajan, and M. Mao, Eds. Springer International Publishing, 2013, vol. 127, pp. 367-379";
	str[4]="M. Kaosar, Q. Mamun, R. Islam, and X. Yi, \"(k-n) oblivious transfer using fully homomorphic encryption system\" in 	Security and Privacy in Communication Networks, ser. Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering, T. Zia, A. Zomaya, V. Varadharajan, and M. Mao, Eds. Springer	International Publishing, 2013, vol. 127, pp. 380-392.";
	
			
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=n-1; i>=2;i--)
	{
		finalStr=finalStr+"<li>"+str[i]+"</li>";
	}
	return finalStr;
}
function getConferencePapers(){
	var finalStr="";
	var str=[];
	str[0]="<h3>Conference Papers</h3></br>";
	str[1]="";
	str[2]="M. G. Kaosar, M. Shorfuzzaman and S. Ahmed, \"A novel approach to solving N-queens problem\", 8th World Multiconference on Systemics, Cybernetics and Informatics (SCI 2004), 2004, July, Vol. 5. pp. 186-190.";
	str[3]="M. G. Kaosar, \"Finding Multiple Solutions from a single solution of N-Queen Problem\", International Conferences on Challenges and Opportunities in IT Industry (ICCII 2005), 2005, November, Page no. 44, Punjab, India.";
	str[4]="M. G. Kaosar, \"Primality Test - An Enhanced Method\", International Conferences on Challenges and Opportunities in IT Industry (ICCII 2005), 2005, November, Page no. 82, Punjab, India.";
	str[5]="M. G. Kaosar, Hafiz M.Asif, \"Comparative Study of Two MANET Routing Protocols DSR and TORA Using OPNET\", 2nd CIIT Workshop on Research in Computing, 2005, 18 November, PP 23-28, ISBN: 9698779086, Lahore, Pakistan";
	str[6]="M. M. Hassan, S.M.S Islam, M. G. Kaosar, \"\"Virtual Ear\": A Center Based Visual Clustering Approach\", International Conference on Intelligent Systems (ICIS 2005), 1-3 December, Kuala Lumpur, Malaysia.";
	str[7]="M. G. Kaosar, \"Solving the N-Queen Problem Using Direct Placement Method\", International Conference On Intelligent Systems (ICIS 2005), 1-3 December, Kuala Lumpur, Malaysia.";
	str[8]="M. G. Kaosar, H. M. Asif, T R. Sheltami, A. S. H. Mahmoud, \"Simulation Based Comparative Study of On Demand Routing Protocols for MANET\", International Conference on Wireless Networking and Mobile Computing (ICWNMC'05 ), 2005,28-30 December, Vol. 1, pp. 201-206, Chennai, India.";
	str[9]="M. G. Kaosar, A. S. H. Mahmoud, T. R. Sheltami, \"Performance Improvement of Dynamic Source Routing Protocol Considering the Mobility Effect of Nodes in Cache Management\", The third IEEE and IFIP International Conference on wireless and Optical Communications Networks (WOCN 2006), 2006,11-13 April, Catalogue No: 06EX1360C,ISBN: 1424403405, Bangalore, India";
	str[10]="H. M. Asif, M. G. Kaosar, \"Performance Comparison of IP, MPLS and ATM Based Network Cores\", First IEEE	International Conference on Information and Industrial Systems ICIIS 2006, 8-11 August, IEEE Catalogue Number: 06EX1355C, ISBN: 1424403327, Library of Congress: 2006922875, Sri Lanka";
	str[11]="M. G. Kaosar, T. R. Sheltami, \"Mobility Based On-demand MANET Routing Protocol\", First IEEE International	Conference on Information and Industrial Systems ICIIS 2006, 8-11 August, IEEE Catalogue Number:	06EX1355C,ISBN: 1424403327, Library of Congress: 2006922875, Sri Lanka";
	str[12]="M. G. Kaosar, T. R. Sheltami, \"Simulation Study of Delay Analysis for Voice Transmission over MANET\", First	IEEE International Conference on Information and Industrial Systems ICIIS 2006, 8-11 August, IEEE	Catalogue Number: 06EX1355C, ISBN: 1424403327, Library of Congress: 2006922875, Sri Lanka";
	str[13]="M. G. Kaosar, T. R. Sheltami, \"Effect of Voice Transmission over MANET using Energy Aware Cluster Based	Routing Protocol\", TSSA and WSSA 2006, 2006, 8-9 December, Indonesia";
	str[14]="M. G Kaosar, Tarek R. Sheltami, Ashraf S. HasanMahmoud, \"Delay and Power Efficient Voice Transmission over MANET\", IEEE International Conference on Communication (ICC 07), 2007, 24-28 June, Pp. 3313-3318, United Kingdom";
	str[15]="M. G. Kaosar, Z. Xu, X. Yi, \"Distributed Association Rule Mining with Minimum Communication Payload\", The	Australasian Data Mining Conference (AusDM 2009), 2009,1-4 December, Vol 101, pp 17-23, Melbourne, Australia";
	str[16]="M. G. Kaosar, Russell Paulet, X. Yi, \"Secure Two Party Association Rule Mining\", In Proc. Australasian Informatio	Security Conference (AISC 2011), Perth, Australia. CRPIT, 116. Colin Boyd and Josef Pieprzyk Eds., ACS. pp. 15-22";
	str[17]="R. Paulett, M. G. Kaosar, X. Yi, \"k-Anonymous Private Query Based on Blind Signature and Oblivious Transfer\",	International Cyber Resilience Conference, 2011,12 August, Perth, Australia";
	str[18]="M. G. Kaosar, Russell Paulet, X. Yi, \"Optimized two Party Privacy Preserving Association Rule Mining using Fully Homomorphic Encryption\", 11th International Conference on Algorithms and Architecture for Parallel Processing (ICA3PP-11), October 24-26, 2011, Melbourne, Australia, LNCS 7016, Springer Verlag Berlin Heidelberg.";
	str[19]="Russell Paulet, M. G. Kaosar, Xun Yi, Elisa Bertinoy, \"Privacy Preserving and Content Protection Location Based Queries\", 28th IEEE International Conference on Data Engineering (ICDE 2012), Washington, DC, USA, April 1-5, 2012.";
	str[20]="Q. Mamun, M. Kaosar, R. Islam \"Establishing Secured Communication in Cluster based Wireless Sensor	Networks\", 8th International Symposium on Wireless Pervasive Computing (ISWPC) 2013, Taipei, Taiwan 20-22nd November 2013.";
	str[21]="M. Kaosar, \"Backtracking Based Integer Factorization, Primality Testing and Square Root Calculation\", The Fourth	International conference on Computer Science and Information Technology (CCSIT 2014), 21-22 February 2014,	Sydney, Australia, Computer Science Conference Proceedings, pp. 77-83.";
	str[22]="A. K. Mandal, M. O. Islam, M. Kaosar, M. D. Hossain, \"An Approach for Enhancing Message Security in Audio	Steganography\", 16th International Conference on Computer and Information Technology (ICCIT'2013), pp. 383-388, 8-10 March 2014, Khulna, Bangladesh";
	str[23]="M. Begum, Q. Mamun, M. Kaosar, \"A Privacy Preserving Framework for Personally Controlled Electronic Health	Record (PCEHR) System\", 2013 SRI Security Congress, The Proceedings of 2nd Australian e-Health Informatics	and Security Conference pp. 1-10, 2-4 December, 2013 Perth, Western Australia";
	str[24]="K. Rabbi, R. Islam, Q. Mamun, M. Kaosar, \"MTTG - An Efficient Technique for Test Data Generation\", SKIMA2014, 18-20 December 2014, Dhaka, Bangladesh";
	str[25]="K. Rabbi, M. Kaosar R. Islam, Q. Mamun, \"A Secure Real Time Data Processing Framework for Personally	Controlled Electronic Health Record (PCEHR) System\", 10th International Conference on Security and Privacy in Communication Networks (SecureComm 1014), 2426 September, 2014, Beijing, China.";
	str[26]="Q. mamun, M. Kaosar, \"What is the First Step in Designing an Application Protocol for Wireless Sensor Networks	(WSNs)?\", IEEE Sensors Applications Symposium (SAS) 2014, February 1820, 2014, Queenstown, New Zealand";
	str[27]="Shaimaa AlBugami, Baraa Arif, Mohammed Kaosar, \"Shaping and Regulating Privacy Statements to Increase	Customer Satisfaction\", Customer Service in the Public Sector Conference, The Saudi Ministry of Civil Service, 17-19 Nov 2015";
	str[28]="Afnan Waseem Alhamid, Khulud Abdullah Al-Khaldi, Mohammed Kaosar, \"Smart home base safe playground for kids\", Playground Conference KSU, Ryadh, KSA, 2015.";
	str[29]="Mohammed Kaosar, \"Smart Vending Machines for Smart Community\", Research and Innovation Forum Rome, April 24-26 2018 [Accepted].";
	str[30]="Mohammed Kaosar, \"A Novel Human Computer Interaction for Internet of things Using Eye-Tracker\", Research and Innovation Forum Rome, April 24-26 2018 [Accepted].";
	str[31]="Abdulatif Abdulatif, Mohammed Kaosar, \"Privacy Preserving Analytic as-a-service in IoT Cloud\", Research and Innovation Forum Rome, April 24-26 2018 [Accepted].";
	str[32]="Adil Rajput, Mohamed Kaosar and Akila Sarirete, \"Replay Attacks In Personal Area Networks: Potential Threat And Solution Approaches\", Research and Innovation Forum Rome, April 24-26 2018 [Accepted].";
	
	
	
			
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=n-1; i>=2;i--)
	{
		finalStr=finalStr+"<li>"+str[i]+"</li>";
	}
	return finalStr;
}
function getReferees(){
	var finalStr="";
	var str=[];
	var c=2
	str[0]="<h3>REFERENCES</h3></br>";
	str[1]="";
	str[30]="<b>Professor Xun Yi </b></br>School of Science, RMIT University, Melbourne, Australia</br>Phone: +61 3 9925 1902</br>Email: xun.yi@rmit.edu.au";
	str[3]="<b>Professor Tarek R. Sheltami </b></br>Department of Computer Engineering, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</br> Phone:+96638603059</br>Email: tarek@kfupm.edu.sa";
	str[2]="<b>Professor Sadiq Sait </b></br> Director, Center for Communications and Information Technology Research, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</br>Phone:+96638603315</br>Email:sadiq@kfupm.edu.sa";
	str[30]="<b>Quazi Mamun </b></br> Senior Lecture, School of Computing and Mathematics, Charles Sturt University (CSU), Australia</br>Phone:+61 2 6933 4725</br>Email:qmamun@csu.edu.au";
	str[4]="<b>Dr. Nurul Hasan (Research Collaborator)</b></br> Principal Lecturer, Petroleum and Chemical Engineering, Universiti Teknologi Brunei (UTB)</br>Phone:+673 2461020 Ext 6032</br>Email:nurul.hasan@utb.edu.bn ";
	str[6]="<b>Professor Anis Koubaa </b></br> College of Computer and Information Sciences, Prince Sultan University, KSA</br>Phone:+673 2461020 Ext 6032</br>Email:akoubaa@psu.edu.sa";
	str[6]="<b>Associate Professor Irfan Altas </b></br> Head of School, School of Computing & Mathematics, Charles Sturt University, Australia</br>Phone:+61 2 6933 2357</br>Email:ialtas@csu.edu.au";
		
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<=4;i++)
	{
		finalStr=finalStr+str[i]+"</br>";
	}
	return finalStr;
}
function getCommunityServices(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>Some recent community services include but not limited to</h3></br>";
	str[1]="Fall 2018";
	
	str[c++]="Coach for the programmng contestant teams for 3rd NC3 Programing Competition in King Khaled University, Abha, KSA on 8-9 October 2018.";
	str[c++]="Supervising students in visit to IT department of Saudi Electricity Company on 15 October 2018.";
	str[c++]="Coach for the programmng contestant teams for IEEE Extreme programming competition 2018 on 20 October 2018.";

	
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i]+"</li>";
	}
	return finalStr;
}