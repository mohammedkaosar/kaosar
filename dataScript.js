function getHome(){
	var finalStr="";
	var str=[];
	str[0]="<h3>Home Page</h3></br>Dr. Kaosar is currently working as a Senior Lecturer in the Discipline of IT, Media and Communications, Murdoch University Australia. Prior to that he has worked in several universities including RMIT University, Victoria University, Effat University and Charles Sturt University.  Dr. Kaosar has worked in number of national and international research projects and grants. He has published number of research papers in reputable journals and conferences including - IEEE Transaction on Knowledge and Data Engineering (TKDE), Data and Knowledge Engineering (DKE), IEEE International Conference on Data Engineering (ICDE), Computer Communication (ComCom). He has been supervising many postgraduate students, mentoring junior colleagues, and collaborating with many national and international researchers. Dr. Kaosar is an active member of various professional organizations including - IEEE, Australian Computer Society (ACS), European Alliance for Innovation (EAI), The Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (ICST), South Pacific Competitive Programming Association, Industrial Engineering and Operation Management(IEOM). Dr. Kaosar is involved in arranging various events such as programming contests, conferences and workshops etc.";
	str[1]="";
	finalStr=str[0]+str[1];
	return finalStr;
}
function getCVHead_short(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="";//<h3>CURRENT POSITIONS</h3></br>";
	str[1]="";
	str[c++]="<b>Senior Lecturer</b> </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp School of Information Technology, Mathematics and Statistics, Murdoch University</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perth, Australia</br>URL: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;http://profiles.murdoch.edu.au/myprofile/mohammed-kaosar/</br>";
	//str[c++]="<b>Research Fellow and Online Instructor</b> </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp School of Science, RMIT University</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Melbourne, Australia</br>";	
	//str[c++]="<b>Lecturer (Casual)</b> </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp Victoria Universities, Charles Sturt University, Australia</br>";
	//str[c++]="<b>Course Designer</b> </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp Laureate International Universities, Australia</br>";
	//str[c++]="<b>Consultant</b> </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp Don Computing Melbourne, Australia</br>";
	str[c++]="<b>Contact Detail:</b> 180, Forsyth Road, Williams Landing, VIC 3027, Australia</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: mgkr14@gmail.com or mohammed.kaosar@rmit.edu.au</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mob:+61424838847";
	//str[c++]="<b>Assistant Professor</b> </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp Department of Computer Science</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Faculty of Engineering, Effat University</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jeddah, KSA</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mailing Address: </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspFlat 11, 60 Epping Rd, Lane Cove NSW 2066, Australia</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: mgkr14@gmail.com, Skype: cybersec.resgroup</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mob:+8801717213628, +61434610979</br><b>Other detail:</b> Country of citizenship - Australia, Date of Birth - 24 Nov 1976</br>";
	//str[c++]="<b>Assistant Professor</b>, Department of Computer Science</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faculty of Engineering, Effat University, Jeddah, KSA</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PO Box 34689, Jeddah 21478, Saudi Arabia</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: mgkr14@gmail.com, Mob:+61434610979</br>";
	
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
	var c=0;
	str[c++]="<h3>STRENGTHS</h3></br>";
	str[c++]="";
	str[c++]="Demonstrated teaching experience in many ICT courses in undergraduate and graduate level both in face-to-face and online mode."
	//Computer Science and Engineering, especially for courses relating to Cyber Security, Information Security & Privacy, Human Computer Interaction, Database, Programming Languages, Moble Application Development, etc."
	str[c++]="Demonstrated research strength in various topics in terms of publications, supervising students, conducting research projects and seeking for grants."//information cyber security and privacy, cryptography, wireless ad-hoc network, computer network and data mining."
	//str[c++]="Demonstrated track record of publications in journals and conferences of international standard."
	str[c++]="A solid foundation in computer science with strong background in mathematics."
	str[c++]="Excellent communication skills developed through research and academic experience gained from various universities."

		
	finalStr=str[0]+str[1];
	var n=c;//str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i];
	}
	return finalStr+"</li>";
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
	str[1]="To secure an academic position in a university that provides opportunity to build and apply the knowledge in the field of computer science where the vehicle is high quality teaching and cuttingedge research.";
	//str[1]="To secure a position in an organization or university that would facilitate building and applying the knowledge in the area of computer science where the vehicle is high quality research and multidisciplinary collaboration.";
		
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+str[i];
	}
	return finalStr;
}
function getCareerDev(){
	var finalStr="";
	var str=[];
	str[0]="<h3>CAREER OBJECTIVE</h3></br>";
	//str[1]="To secure an academic position in a university that provides opportunity to build and apply the knowledge in the field of computer science where the vehicle is high quality teaching and cuttingedge research.";
	//str[1]="To secure a position in an organization or university that would facilitate building and applying the knowledge in the area of computer science where the vehicle is high quality research and multidisciplinary collaboration.";
	str[1]="To practice and develop systems which are built on the basis of innovative technologoes to solve a real life problem towards benefiting the humanity.";
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
	
	
	str[c++]="Information Security, Privacy, Cryptography and Blockchain";	
	str[c++]="Cyber Security";	
	str[c++]="Information-Centric Networking";	
	str[c++]="Wireless Ad-hoc Network";	
	//str[c++]="Data Mining and Data Science";
	str[c++]="Internet of Things";	
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
function getSkills(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>SKILLS AND PREFERENCES</h3></br>";
	str[1]="Skills and the area of my interest include but not limited to:";
	
	
	str[c++]="Teaching and training students at various levels using various modes in the area if ICT";	
	str[c++]="Multidisciplinary research";
	str[c++]="Web development, Programming languages Java, C++, Python etc.";	
	str[c++]="Software development";	
	str[c++]="Cyber-security, Network-security administration";	
	str[c++]="Various tasks related to ICT";
	
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
	var c=2;
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
	str[12]="<b>Position - Assistant Professor</b><li style=\"margin-left:20px; \">University -  Department of Computer Science Effat University, Saudi Arabia</br><li style=\"margin-left:20px; \">Duration - July 2014 - July 2019</br><li style=\"margin-left:20px; \">Responsibility - Subjects Taught - Human Computer Interface, Algorithm Analysis, Data Structure and Algorithm Design, Digital Skill, Information Security,  Research Seminar Programming Languages( Java C++), Software Engineering etc.</br><li style=\"margin-left:20px; \">Others - Department and college committees, Research committee, Mentoring programming clubs, Coaching students for programming ompetitions etc.";
	str[13]="<b>Position - Research Fellow</b><li style=\"margin-left:20px; \">University -  Computer Science and Software Engineering Department, RMIT University, Australia</br><li style=\"margin-left:20px; \">Duration - August 2019 - Current</br><li style=\"margin-left:20px; \">Responsibility - ARC Discovery project";
		*/
	str[c++]="<b>Before PhD</b>(2001-2008)<li style=\"margin-left:20px; \">Arab Open University, KSA</br><li style=\"margin-left:20px; \">Research Institute, KFUPM, KSA </br><li style=\"margin-left:20px; \">Asian University, Bangladesh</br><li style=\"margin-left:20px; \">People's University, Bangladesh</br><li style=\"margin-left:20px; \">Queens University, Bangladesh</br><li style=\"margin-left:20px; \">Beximco Computers, Bangladesh";
	str[c++]="<b>Position - Sessional Instructor</b><li style=\"margin-left:20px; \">University -  School of Engineering and Science, Victoria University, Australia</br><li style=\"margin-left:20px; \">Duration - 2009-2011(During PhD) </br><li style=\"margin-left:20px; \">Responsibility - Teaching - undergraduate sessional courses e.g.- Engineering Mathematics 1A, Network Security etc., performing various grading, lecturing.";
	str[c++]="<b>Position - Research Fellow</b><li style=\"margin-left:20px; \">University -  School of Engineering and Science, Victoria University, Australia</br><li style=\"margin-left:20px; \">Duration - 2011-2012</br><li style=\"margin-left:20px; \">Responsibility - Conducting research in two ARC (Australian Research Council) projects, namely (1) \Private Data Warehouse Query\ and (2) Privacy Protection in Distributed Data Mining";
	str[c++]="<b>Position - Lecturer </b> </br><li style=\"margin-left:20px; \">University -  School of Computing and Mathematics, Charles Sturt University, Australia</br><li style=\"margin-left:20px; \">Duration - Jan 2013- July 2014</br><li style=\"margin-left:20px; \">Responsibility - Teaching undergraduate and graduate courses, supervising PhD students, conducting research in various priority areas, coordinating courses, performing various administrative tasks etc.";
	str[c++]="<b>Position - Assistant Professor</b> <li style=\"margin-left:20px; \">University -  Department of Computer Science Effat University, Saudi Arabia</br><li style=\"margin-left:20px; \">Duration - July 2014 - July 2019</br><li style=\"margin-left:20px; \">Responsibility - Teaching and supervising undergraduate students, Conducting research in various priority areas, serving as the secretary general of Computer Science Department, coordinating courses, coaching students for programming contests, performing various administrative duties etc.";
	str[c++]="<b>Position - Research Fellow and Online Instructor</b><li style=\"margin-left:20px; \">University -  Computer Science and Software Engineering Department, RMIT University, Australia</br><li style=\"margin-left:20px; \">Duration - August 2019 - June 2020</br><li style=\"margin-left:20px; \">Responsibility - Teaching and coordinating ICT courses (e.g. Programming Principle, Web Design etc.), performing research (Australian Research Council project 'Private search in streaming data'), supervising PhD and honors students, writing grant applications";
	str[c++]="<b>Position - Senior Lecturer</b><li style=\"margin-left:20px; \">University -  Discipline of Information Technology, Murdoch University, Australia</br><li style=\"margin-left:20px; \">Duration - 2020 - Current";
		
	finalStr=str[0]+str[1];
	var n=c;//str.length;
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
	str[0]="<h3>PROFESSIONAL AFFILIATIONS AND COMMUNITY ACTIVITIES</h3></br>";
	str[1]="";	
	str[c++]="Member: IEEE, Australian Computer Society (ACS), European Alliance for Innovation (EAI), The Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (ICST), South Pacific Competitive Programming Association, Industrial Engineering and Operation Management(IEOM)";
	//str[c++]="Member, Centre for Research in Complex Systems (CRICS), Charles Sturt University, Australia";
	//str[c++]="Member, ICT Security Group, Charles Sturt University, Australia";
	//str[c++]="Member, Advanced Network Research Lab (ANRL) Group, Charles Sturt University, Australia";
	str[c++]="Editorial Board Member: International Journal in Foundations of Computer Science and Technology (IJFCST)";
	str[c++]="Program Committee: AIACT 2021 Shanghai China, Learning and Teaching Conference, Effat University, 2015-2019; International Workshop on Applications and Techniques in Information Security (ATIS), 2013";
	str[c++]="Reviewer: ATIS2013, NSS2013, SCI 2005, SCI 2006, Journal of KSU-CIS, Journal of Biomedical Informatics, Journal of Computers (JCP) etc.";
	str[c++]="Organizer:  Effat L&T Conference (2015-2019), Various ACM-Compliant programming contests including She-Codes-2019 in KSA";	
			
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
	str[c++]="Responding to Disclosure of Sexual Harm, RMIT, Australia";

	
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
	
	str[c++]="\"Importance of programming for females in KSA\", SheCodes, first Effat University Programming Contest, Effat University, Jeddah Saudi Arabia, April, 2019";
	str[c++]="\"Preparing for ICPC (ACM compliant International Collegiate Programming Contest)\", Effat University, Jeddah Saudi Arabia, September, 2018";
	str[c++]="\"Workshop on PC2 (Programming Contest Control System) developed by California State University, Sacramento\", Teacher - Student forum, Effat University, Jeddah Saudi Arabia, December, 2017";
	str[c++]="\"Privacy Preserving Participatory Sensor Network in Intelligent Rescue system\", The Center of Excellence in Intelligent Engineering Systems (CEIES), King AbdulAziz University, Jeddah Saudi Arabia, Dec, 2016";
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
	
	str[c++]="Best Event Organizer in the College, Effat University 2018-2019, Jeddah, Saudi Arabia";
	str[c++]="Best Student Support Award, Effat University 2016-2017, Jeddah, Saudi Arabia";
	str[c++]="Best Research Publication of the Year 2013-2014, Charles Sturt University, Australia";
	str[c++]="The Maker Space: From Imagining to Making, 14th Learning and Teaching Conference 2017, Certificate of Appreciation, Effat University, Jeddah, Saudi Arabia";
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
	str[0]="<h3>TEACHING EXPERIENCE</h3></br>";
	str[1]="I have taught and coordinated more than 15 different courses face-to-face and online in several universities for more than 9 years. The average teaching evaluation I received is above 85% wherever applicable. A short list of courses includes but not limited to as follows:";
	var c=2;
	
	//str[c++]="<u>Queen's University</u>, Bangladesh [2002-2004 part-time]: Prolog, Digital Logic Design";
	//str[c++]="<u>Ahsanullah University of Science & Technology</u>, Bangladesh [2002-2004 part-time]: Programming JAVA";
	//str[c++]="<u>Dhaka International University</u>, Bangladesh [2002-2004 part-time]:, Programming Language I, Object Oriented Programming (C++),	Assembly Language";
	//str[c++]="<u>People's University</u>, Bangladesh [2001-2002]: Computer Architecture, Database";
	//str[c++]="<u>Asian University</u>, Bangladesh [2002-2004]: Operating System, Networking, Information System Design, Object Oriented Programming (C++), Software Development Project, Senior Project (Information System Design)";
	//str[c++]="<u>Arab Open University</u>, KSA [2007-2008 part-time]: Senior Software Development Project, Object Oriented Programming with C++ and Java, Computer Fundamentals";
	str[c++]="<u>Effat University</u>, KSA [2014-2019]: Information Security Architecture, Cryptography, Computer Network, Human Computer Interface, Algorithm Analysis, Digital Skill, Programming Languages, Data Structure and Algorithm	Design, Research Methodology, Capstone Projects etc.";
	str[c++]="<u>Victoria University</u>, Australia [2020]: Database Analysis and Design, [2009-2010]: Network Security (Practical), Engineering Mathematics (Sessional)";
	str[c++]="<u>Charles Sturt University</u>, Australia [2020]: Internet of Things, [2013-2014]: Mobile Application Development, Management and Information Security, Information Technology Project Management, Research Project Plan in IT, Computer Vision, Web Based	Information Systems, Programming in Java 2, C++ Programming Techniques";	
	str[c++]="<u>RMIT University</u>, Australia [2019-2020]: Programming Principal 2A, Security in Computing";
	finalStr=str[0]+str[1];
	str[c++]="<u>Murdoch University</u>, Australia [2020-Current]: Python Programming Principal, Transition to IT, Principles of Computer Science";
	finalStr=str[0]+str[1];
	var n=c;//str.length;
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
	str[1]="I have taught number of courses in several universities. I can teach any Computer Science related courses. My teaching preference includes but not limited to:";
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
	str[0]="<h3>Current Projects/Grant</h3></br>";
	str[1]="";
	var c=2;
	//str[c++]="<b>MHE Project</b>: Smart walkability in the urban life of KSA. (under review)";
	//str[c++]="<b>KACST Project</b>: Statistical Thermodynamics and Shale Reservoir Multiscale Simulation. (under review)";
	//str[c++]="<b>EFFAT internal research grant</b>: Privacy Preserving Data Mining in Cloud Computing Using Homomorphic Encryption. (Abstract accepted)";
	
	str[c++]="<b>Automation of Fluid Dynamic Simulations</b>: Development of a simulation with Don Computing, Melbourne, for research and training pupose";
	str[c++]="<b>Grant application under review</b>: Privacy Preserving Cloud based Data Mining using Homomorphic Encryption, Qassim University, KSA, 2019";
	str[c++]="<b>Grant application under review</b>: Analyzing Security and Related Challenges of Intelligent Software Systems to Provide Multi-modal Solutions, Qassim University, KSA, 2019";
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
	str[0]="<p>Some of the projects I have worked include but not limited to:</p>";
	str[1]="";
	var c=2;
	//str[c++]="<b>Project Title:</b> Airline Reservation System (2007, Role - Programmer)</br><li>Synopsis: Facilitates passengers to make reservation through mobile or pocket PC regardless of their locations. Two ends were involved in this system. The mobile end was developed using J2ME and the gateway and the server end were developed using Java and Oracle</li><li>Organization: Research Institute, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</li>";
	//str[c++]="<b>Project Title:</b> Pocket Quran (2008, Role - Programmer (Software development for mobile devices))</br><li>Synopsis: Software development for pocket PC and mobile devices to display the Holy Quran with various browsing options. J2ME and Microsoft .net were used as the development tool.</li><li>Organization: Research Institute, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</li>";
	//str[c++]="<b>Project Title:</b> BexiBank (2001, Role - System Analyst and Programmer)</br><li>Synopsis: Development of an application for a complete banking system. It is considered as one of the leading product in this area in Bangladesh. Oracle and developer 2000 had been used as development tools.</li><li>Organization: Beximco Computers Ltd. Dhaka, Bangladesh.</li>";
	str[c++]="<b>Project Title:</b>  Automatic Vehicle Locator(AVL) (2007-8, Role - Programmer (Software development in the mobile and pocket PC end))</br><li>Synopsis: The objective of the project is to enable a pocket PC or a Javaenabled mobile phone to locate a	particular vehicle and display its exact location in the map. J2ME and Microsoft .net were used as the development tool in this project.</li><li>Organization: Research Institute, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia.</li>";
	str[c++]="<b>Project Title:</b>  Privacy Protection in Distributed Data Mining (ARC Discovery, 2008-10, Role - Research Fellow)</br><li>Synopsis: : Distributed data mining applications, such as those dealing with health care finance, counterterrorism	and homeland defence, use sensitive data from distributed data sets held by different parties. This	solution comes into direct conflict with an individual's need right for privacy. This project aims of studying	techniques to protect privacy in distributed data mining. The significance of this project is to keep privacy of	each distributed dataset and meanwhile share gains from distributed data mining.</li><li>Organization: School of Engineering and Science, Victoria University, Australia.</li>";
	str[c++]="<b>Project Title:</b>  Private Data Warehouse Query (ARC Discovery, 2009-11, Role - Post-Doc Research Fellow)</br><li>Synopsis:  Information and Communications Technology (ICT) has dramatically altered the world's social and	economic landscape. 'From data to knowledge' is one of priority challenges recognized by National ICT	Australia. However, privacy concern may prevent it from realization. This project aims to fulfil 'from data to	knowledge' without breaching privacy of user's queries to a data warehouse. The outcomes of this project is to	create new directions in the research of private data warehouse query, and are applicable to stock exchange	data warehouses and pharmaceutical data warehouses, where the user is reluctant to reveal his query to the	data warehouse operator.</li><li>Organization: School of Engineering and Science, Victoria University, Australia.</li>";
	str[c++]="<b>Project Title:</b>  Private Searching on Streaming Data (ARC Discovery, 2019-2020, Role - Research Fellow)</br><li>Synopsis: Private searching on streaming data. This project aims to explore secure and practical solutions for various internet search types and to develop a prototype of a private searching system to avoid compromising user privacy whilst sharing query requests. Searching of streaming data allows collection of useful information from huge streaming sources of data such as on-line news feeds and internet chat-rooms. Current solutions for this problem are inefficient and restricted to a couple of simple search types, and vulnerable to identifying the search requester. The project expects to develop private searching tools to protect the privacy of user's search queries. This will have the potential to detect any attacks to our digital infrastructure while keeping the search criteria classified, and could have applications in Australian counter-terrorism and homeland defence.</li>";	
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
	var c=0;
	str[c++]="<h3>Journals</h3></br>";
	str[c++]="";
	str[c++]="M. G. Kaosar, \"Finding Multiple Solutions from a Single Solution of N-queen Problem\", PCTE Journal of Computer Sciences, 2005, December, Vol. 1, Issue 2, Jul-Dec.";
	str[c++]="M. G. Kaosar, \"Shortest and Simplest Solutions for N-Queen Problem\", PCTE Journal of Computer Sciences, 2006, December, Vol. 2, Issue 2 Jul-Dec"
	str[c++]="T. R. Sheltami, M. G. Kaosar, \"Improved Caching Mechanism for Ad-hoc Network Routing Protocol\", PCTE Journal of Computer Sciences, 2006, December, Vol. 2, Issue 2 Jul-Dec";
	str[c++]="M. G. Kaosar, T. R. Sheltami, \"Voice Transmission over Ad-Hoc Network Adapting Optimum Approaches to Maximize the Performance\", Computer Communications, 2008. doi:10.1016/j.comcom.2008.11.028";
	str[c++]="M. G. Kaosar, X. Yi, \"Privacy Preserving Association Rule Mining in Ubiquitous Computing Environment\", Ubiquitous Computing and Communication Journal (UBICC), 2010, Volume 5, ISSN Online 1992-8424, ISSN Print 1994-4608, 2010";
	str[c++]="M. G. Kaosar, X. Yi, \"Semi-Trusted Mixer Based Privacy Preserving Distributed Data Mining for Resource Constrained Devices\", International Journal of Computer Science and Information Security (IJCSIS), 2010, April, vol - 8, no - 1, pp. 44-51.";
	str[c++]="M. G. Kaosar, X. Yi, \"Secure Two-Party Association Rule Mining Based on One-pass FP-Tree\", International Journal of Information Security and Privacy (IJISP), 2011, vol-5, issue 2, pp. 13-32, January.";
	str[c++]="M. G. Kaosar, Russell Paulet, X. Yi, \"Fully Homomorphic Encryption Based Two Party Association Rule Mining\", journal of Data & Knowledge Engineering (DKE), 2012, March, http://dx.doi.org/10.1016/j.bbr.2011.03.031";
	str[c++]="X. Yi, M. G. Kaosar; R. Paulet, E. Bertino, \"Single-Database Private Information Retrieval from Fully Homomorphic Encryption\", Transactions on Knowledge and Data Engineering (TKDE), vol.25, no.5, pp.1125-1134, May 2013";
	str[c++]="R. Paulet, M. Kaosar, X. Yi E. Bertino, \"Privacy Preserving and Content Protecting Location Based Queries\", IEEE Transactions on Knowledge and Data Engineering(TKDE), vol.99, no pre-print, ISSN: 10414347, 2013";	
	str[c++]="Q. Mamun, M. Kaosar, R. Islam \"Secured Communication Key Establishment for Cluster based Wireless Sensor Networks\", International Journal of Wireless Networks and Broadband Technologies (IJWNBT), 2014";
	str[c++]="Q. mamun, R. Islam, M. Kaosar, \"Anomaly Detection in Wireless Sensor Networks\", Journal of Networks (JNW, ISSN 17962056), 2014.";
	str[c++]="M. Kaosar, Q. Mamun, \"Privacy Preserving Interest Group Formation in Online Social Networks (OSNs) using Fully Homomorphic Encryption\", Journal of Information Privacy and Security (JIPS), 2014, doi = {10.1080/15536548.2014.912909}.";
	str[c++]="Abdulatif, M. Kaosar, \"Privacy Preserving Cloud Computation using Domingo Ferrer Scheme\" Journal of King Saud University Computer and Information Sciences Volume 28, Issue 1, January 2016, Pages 27-36";
	str[c++]="Adel Binajjaj, Tarek Sheltami, Farouq Aliyu, Mohammed Kaosar, \"Design and Implementation of a Wearable Gas Sensor Network for Oil and Gas Industry Workers\" Journal of Computers Volume 13, Number 3, March 2018, Pages 300-308, doi: 10.17706/jcp.13.3.300-308";	
	str[c++]="Shaima Albugami, Baraa Arief, Mohammed Kaosar, \"Privacy Statement Regulating Based on User Preferences Using Document Mining\" International Journal of Security, Privacy and Trust Management ( IJSPTM), April 2018";
	str[c++]="C. Trang, R. Ahmed, M. Kaosar, \"Liquid Water Film on the Outer Surface of a Half-Submerged Rotating Drum\", Journal of Plastic Film & Sheeting, February, 2019";		
	str[c++]="H.Sharif, K. Haroon, Z. Paracha, M. Kaosar, H. Javed, \"Identification of Low Frequency Oscillation Disturbance with the Help of Phasor Measurement Unit\", Journal of Solid State Technology, Vol.63, No.1, 2020";	
	str[c++]="M. Kaosar, X. Yi, \"Privacy Preserving Participatory Sensor Network on Named Data Networking Infrastructure\", International Journal of Wireless & Mobile Networks (IJWMN), Vol. 12, No. 1, Pages 1-12 January 2020";
	str[c++]="H. Sharif, A. T. Oo, K. M. Haroon, M. Kaosar, \"A review on various Smart Grid Technologies used in Power System\", International Research Journal of Engineering and Technology (IRJET), Vol. 07, Issue 08, Aug 2020";
	str[c++]="M. Magomelo, M. Kaosar, \"An Exploratory Model to Empirically Test the Impact of Organisational Values and Culture on Information Security\", Journal of Human-Computer Interaction, 2020, [Submitted]";	
	str[c++]="K. M. Haroon, H. Sharif, M. Kaosar, H. Javed, \"A Review on Different Algorithms and Methods used for Neural Spike Detection\", International Research Journal of Engineering and Technology (IRJET), Vol. 07, Issue 08, Aug 2020";
	str[c++]="M. Qiangqiang, N. Hasan, M. Rahman,R. Roslynna,N. Saeid, M. Kaosar, M. Mohiuddin, \"Relationship between GSD and porosity\", Journal of Granular Computing, 2020,[Submitted]";
	str[c++]="M. Patwary, M. Kaosar, \"Predicting COVID-19 affected people and area using dynamic graph link prediction\", Journal of Human-Computer Interaction, 2020, [Submitted]";
	str[c++]="H. Sharif, A. T. Oo, K. M. Haroon, M. Kaosar, \"Protection of Interconnected Transmission Network using Phasor Measurement Unit Scheme\", International Research Journal of Engineering and Technology (IRJET), Vol. 07, Issue 08, Aug 2020";
	str[c++]="S. Hossain, M. Kaosar, \"Intellectual Capital Theft in Precision Agriculture: Challenges and a Solution\", Journal of Human-Computer Interaction, 2020,[Submitted]";
	
			
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
	var c=0;
	str[c++]="<h3>Book Chapters</h3></br>";
	str[c++]="";
	str[c++]="M. G. Kaosar, X. Yi, \"Privacy Preserving Data Gathering in Wireless Sensor Networks\", Ch.12, pp. 237-251, Book: Network Security, Administration and Management, ISSN: 9781609607777, pub. IGI Global, 2011.";
	str[c++]="Q. Mamun, R. Islam, and M. Kaosar, \"Ensuring data integrity by anomaly node detection during data gathering in	WSNS\" in Security and Privacy in Communication Networks, ser. Lecture Notes of the Institute for Computer Sciences,Social Informatics and Telecommunications Engineering, T. Zia, A. Zomaya, V. Varadharajan, and M. Mao, Eds. Springer International Publishing, 2013, vol. 127, pp. 367-379";
	str[c++]="M. Kaosar, Q. Mamun, R. Islam, and X. Yi, \"(k-n) oblivious transfer using fully homomorphic encryption system\" in 	Security and Privacy in Communication Networks, ser. Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering, T. Zia, A. Zomaya, V. Varadharajan, and M. Mao, Eds. Springer	International Publishing, 2013, vol. 127, pp. 380-392.";
	
			
	finalStr=str[0]+str[1];
	var n=c;//str.length;
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
	var c=0;
	str[c++]="<h3>Conference Papers</h3></br>";
	str[c++]="";
	str[c++]="M. G. Kaosar, M. Shorfuzzaman and S. Ahmed, \"A novel approach to solving N-queens problem\", 8th World Multiconference on Systemics, Cybernetics and Informatics (SCI 2004), 2004, July, Vol. 5. pp. 186-190.";
	str[c++]="M. G. Kaosar, \"Finding Multiple Solutions from a single solution of N-Queen Problem\", International Conferences on Challenges and Opportunities in IT Industry (ICCII 2005), 2005, November, Page no. 44, Punjab, India.";
	str[c++]="M. G. Kaosar, \"Primality Test - An Enhanced Method\", International Conferences on Challenges and Opportunities in IT Industry (ICCII 2005), 2005, November, Page no. 82, Punjab, India.";
	str[c++]="M. G. Kaosar, Hafiz M.Asif, \"Comparative Study of Two MANET Routing Protocols DSR and TORA Using OPNET\", 2nd CIIT Workshop on Research in Computing, 2005, 18 November, PP 23-28, ISBN: 9698779086, Lahore, Pakistan";
	str[c++]="M. M. Hassan, S.M.S Islam, M. G. Kaosar, \"\"Virtual Ear\": A Center Based Visual Clustering Approach\", International Conference on Intelligent Systems (ICIS 2005), 1-3 December, Kuala Lumpur, Malaysia.";
	str[c++]="M. G. Kaosar, \"Solving the N-Queen Problem Using Direct Placement Method\", International Conference On Intelligent Systems (ICIS 2005), 1-3 December, Kuala Lumpur, Malaysia.";
	str[c++]="M. G. Kaosar, H. M. Asif, T R. Sheltami, A. S. H. Mahmoud, \"Simulation Based Comparative Study of On Demand Routing Protocols for MANET\", International Conference on Wireless Networking and Mobile Computing (ICWNMC'05 ), 2005,28-30 December, Vol. 1, pp. 201-206, Chennai, India.";
	str[c++]="M. G. Kaosar, A. S. H. Mahmoud, T. R. Sheltami, \"Performance Improvement of Dynamic Source Routing Protocol Considering the Mobility Effect of Nodes in Cache Management\", The third IEEE and IFIP International Conference on wireless and Optical Communications Networks (WOCN 2006), 2006,11-13 April, Catalogue No: 06EX1360C,ISBN: 1424403405, Bangalore, India";
	str[c++]="H. M. Asif, M. G. Kaosar, \"Performance Comparison of IP, MPLS and ATM Based Network Cores\", First IEEE	International Conference on Information and Industrial Systems ICIIS 2006, 8-11 August, IEEE Catalogue Number: 06EX1355C, ISBN: 1424403327, Library of Congress: 2006922875, Sri Lanka";
	str[c++]="M. G. Kaosar, T. R. Sheltami, \"Mobility Based On-demand MANET Routing Protocol\", First IEEE International	Conference on Information and Industrial Systems ICIIS 2006, 8-11 August, IEEE Catalogue Number:	06EX1355C,ISBN: 1424403327, Library of Congress: 2006922875, Sri Lanka";
	str[c++]="M. G. Kaosar, T. R. Sheltami, \"Simulation Study of Delay Analysis for Voice Transmission over MANET\", First	IEEE International Conference on Information and Industrial Systems ICIIS 2006, 8-11 August, IEEE	Catalogue Number: 06EX1355C, ISBN: 1424403327, Library of Congress: 2006922875, Sri Lanka";
	str[c++]="M. G. Kaosar, T. R. Sheltami, \"Effect of Voice Transmission over MANET using Energy Aware Cluster Based	Routing Protocol\", TSSA and WSSA 2006, 2006, 8-9 December, Indonesia";
	str[c++]="M. G Kaosar, Tarek R. Sheltami, Ashraf S. HasanMahmoud, \"Delay and Power Efficient Voice Transmission over MANET\", IEEE International Conference on Communication (ICC 07), 2007, 24-28 June, Pp. 3313-3318, United Kingdom";
	str[c++]="M. G. Kaosar, Z. Xu, X. Yi, \"Distributed Association Rule Mining with Minimum Communication Payload\", The	Australasian Data Mining Conference (AusDM 2009), 2009,1-4 December, Vol 101, pp 17-23, Melbourne, Australia";
	str[c++]="M. G. Kaosar, Russell Paulet, X. Yi, \"Secure Two Party Association Rule Mining\", In Proc. Australasian Informatio	Security Conference (AISC 2011), Perth, Australia. CRPIT, 116. Colin Boyd and Josef Pieprzyk Eds., ACS. pp. 15-22";
	str[c++]="R. Paulett, M. G. Kaosar, X. Yi, \"k-Anonymous Private Query Based on Blind Signature and Oblivious Transfer\",	International Cyber Resilience Conference, 2011,12 August, Perth, Australia";
	str[c++]="M. G. Kaosar, Russell Paulet, X. Yi, \"Optimized two Party Privacy Preserving Association Rule Mining using Fully Homomorphic Encryption\", 11th International Conference on Algorithms and Architecture for Parallel Processing (ICA3PP-11), October 24-26, 2011, Melbourne, Australia, LNCS 7016, Springer Verlag Berlin Heidelberg.";
	str[c++]="Russell Paulet, M. G. Kaosar, Xun Yi, Elisa Bertino, \"Privacy Preserving and Content Protection Location Based Queries\", 28th IEEE International Conference on Data Engineering (ICDE 2012), Washington, DC, USA, April 1-5, 2012.";
	str[c++]="Q. Mamun, M. Kaosar, R. Islam \"Establishing Secured Communication in Cluster based Wireless Sensor	Networks\", 8th International Symposium on Wireless Pervasive Computing (ISWPC) 2013, Taipei, Taiwan 20-22nd November 2013.";
	str[c++]="M. Kaosar, \"Backtracking Based Integer Factorization, Primality Testing and Square Root Calculation\", The Fourth	International conference on Computer Science and Information Technology (CCSIT 2014), 21-22 February 2014,	Sydney, Australia, Computer Science Conference Proceedings, pp. 77-83.";
	str[c++]="A. K. Mandal, M. O. Islam, M. Kaosar, M. D. Hossain, \"An Approach for Enhancing Message Security in Audio	Steganography\", 16th International Conference on Computer and Information Technology (ICCIT'2013), pp. 383-388, 8-10 March 2014, Khulna, Bangladesh";
	str[c++]="M. Begum, Q. Mamun, M. Kaosar, \"A Privacy Preserving Framework for Personally Controlled Electronic Health	Record (PCEHR) System\", 2013 SRI Security Congress, The Proceedings of 2nd Australian e-Health Informatics	and Security Conference pp. 1-10, 2-4 December, 2013 Perth, Western Australia";
	str[c++]="K. Rabbi, R. Islam, Q. Mamun, M. Kaosar, \"MTTG - An Efficient Technique for Test Data Generation\", SKIMA2014, 18-20 December 2014, Dhaka, Bangladesh";
	str[c++]="K. Rabbi, M. Kaosar R. Islam, Q. Mamun, \"A Secure Real Time Data Processing Framework for Personally	Controlled Electronic Health Record (PCEHR) System\", 10th International Conference on Security and Privacy in Communication Networks (SecureComm 1014), 2426 September, 2014, Beijing, China.";
	str[c++]="Q. Mamun, M. Kaosar, \"What is the First Step in Designing an Application Protocol for Wireless Sensor Networks	(WSNs)?\", IEEE Sensors Applications Symposium (SAS) 2014, February 1820, 2014, Queenstown, New Zealand";
	str[c++]="S. AlBugami, B. Arif, M. Kaosar, \"Shaping and Regulating Privacy Statements to Increase	Customer Satisfaction\", Customer Service in the Public Sector Conference, The Saudi Ministry of Civil Service, 17-19 Nov 2015";
	str[c++]="A. Alhamid, K. Al-Khaldi, Mohammed Kaosar, \"Smart home base safe playground for kids\", Playground Conference KSU, Ryadh, KSA, 2015.";
	str[c++]="T. Chimeura, M. Kaosar, \"User Identity Preservation and Data Protection  in the Internet of Things\", Proceedings of the 2nd African International Conference on Industrial Engineering and Operations Management Harare, Zimbabwe, December 8-10, 2020.";
	str[c++]="M. Magomelo, M. Kaosar, \"Security and Privacy Preserving in Precision Agriculture\", Proceedings of the 2nd African International Conference on Industrial Engineering and Operations Management Harare, Zimbabwe, December 8-10, 2020.";
	//str[c++]="M Kaosar\"Oblivious DaaS type Cloud using Binary Search Tree\" Research and Innovation Forum April 15-17, 2020, Athens [Accepted]";
	//str[c++]="M Kaosar, X Yi \"Medical Data Management using Block-Chain\" Research and Innovation Forum April 15-17, 2020, Athens [Accepted]";
	//str[c++]="Mohammed Kaosar, \"Smart Vending Machines for Smart Community\" [Accepted].";
	//str[c++]="Mohammed Kaosar, \"A Novel Human Computer Interaction for Internet of things Using Eye-Tracker\"[Accepted].";
	//str[c++]="Abdulatif Abdulatif, Mohammed Kaosar, \"Privacy Preserving Analytic as-a-service in IoT Cloud\"[Accepted].";
	//str[c++]="Adil Rajput, Mohamed Kaosar and Akila Sarirete, \"Replay Attacks In Personal Area Networks: Potential Threat And Solution Approaches\"[Accepted].";
	
	
	
			
	finalStr=str[0]+str[1];
	var n=c;//str.length;
	var i;
	for(i=n-1; i>=2;i--)
	{
		finalStr=finalStr+"<li>"+str[i]+"</li>";
	}
	return finalStr;
}

function getServices(){
	var finalStr="";
	var str=[];
	var c=2;
	str[0]="<h3>SERVICES</h3></br>";
	str[1]="";
	str[c++]="Course Reviewer and Designer, Laureate International Universities, Australia, 2019 - 2020";
	str[c++]="Secretary General of Computer Science Department, Effat University 2014-2019";
	str[c++]="Founder and Leader of Cybersecurity Research Group, Effat University 2016-2019";	
	str[c++]="University Research Council Member, Effat University 2015-2016";
	str[c++]="College Council Member, College of Engineering, Effat University 2017-2019";
	str[c++]="Department Various Standing Committee Chair and Member, Effat University 2014-2019";
	str[c++]="Reviwer (recent): Journal of Information Security and Applications, The 15th China International Conference on Information Security and Cryptology (Inscrypt 2019), ATIS2013, NSS2013, Journal of KSU-CIS, Journal of Biomedical Informatics, Journal of Computers (JCP)";
	str[c++]="Editorial (recent): International Journal in Foundations of Computer Science and Technology (IJFCST)";

	
	finalStr=str[0]+str[1];
	var n=str.length;
	var i;
	for(i=2; i<n;i++)
	{
		finalStr=finalStr+"<li style=\"margin-left:20px; \">"+str[i]+"</li>";
	}
	return finalStr;
}

function getReferees(){
	var finalStr="";
	var str=[];
	var c=2
	str[0]="<h3>REFERENCES</h3></br>";
	str[1]="";
	str[2]="<b>Professor Xun Yi </b></br>School of Science, RMIT University, Melbourne, Australia</br>Phone: +61 3 9925 1902</br>Email: xun.yi@rmit.edu.au";
	str[13]="<b>Professor Tarek R. Sheltami </b></br>Department of Computer Engineering, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</br> Phone:+96638603059</br>Email: tarek@kfupm.edu.sa";
	str[22]="<b>Professor Sadiq Sait </b></br> Director, Center for Communications and Information Technology Research, King Fahd University of Petroleum and Minerals (KFUPM), Saudi Arabia</br>Phone:+96638603315</br>Email:sadiq@kfupm.edu.sa";
	str[42]="<b>Dr. Quazi Mamun </b></br> Senior Lecture, School of Computing and Mathematics, Charles Sturt University (CSU), Australia</br>Phone:+61 2 6933 4725</br>Email:qmamun@csu.edu.au";
	str[30]="<b>Irfan Altas </b></br> Associate Professor anf Head of the School, School of Computing and Mathematics, Charles Sturt University (CSU), Australia</br>Phone:+61 2 6933 2357</br>Email:ialtas@csu.edu.au";
	str[7]="<b>Dr. Nurul Hasan </b></br> Principal Lecturer, Petroleum and Chemical Engineering, Universiti Teknologi Brunei (UTB)</br>Phone:+673 2461020 Ext 6032</br>Email:nurul.hasan@utb.edu.bn ";
	str[6]="<b>Professor Anis Koubaa </b></br> College of Computer and Information Sciences, Prince Sultan University, KSA</br>Phone:+673 2461020 Ext 6032</br>Email:akoubaa@psu.edu.sa";
	str[6]="<b>Associate Professor Irfan Altas </b></br> Head of School, School of Computing & Mathematics, Charles Sturt University, Australia</br>Phone:+61 2 6933 2357</br>Email:ialtas@csu.edu.au";
	str[6]="<b>Dr Ashfaqur Rahman </b></br> Principal Research Scientist, CSIRO, Australia</br>Phone:+61 3 9545 2176</br>Email:ashfaqur.rahman@data61.csiro.au";
	str[4]="<b>Dr. Nurul Hasan </b></br> CEO, Don Computing, Melbourne, Australia</br>Phone:+61-3-90159475</br>Email:drnhasan@doncomputing.com ";
	str[3]="<b>Associate Professor Ibrahim Khalil </b></br>School of Science, RMIT University, Melbourne, Australia</br>Phone: +61 470379706 </br>Email: ibrahim.khalil@rmit.edu.au";
	str[5]="<b>Mohammed Kibria </b></br>Structural Engineer, Department of City Planning, City of Atlanta, GA, USA</br>Phone: +1-404-330-6507</br>Email: mgkibria@atlantaga.gov";
	str[31]="<b>Dr. Mohammad Shorfuzzaman </b></br>Associate Professor, Computer Science Department, Taif University, Saudi Arabia	</br>Phone: +966506034002</br>Email: m.shorf@tu.edu.sa";
		
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