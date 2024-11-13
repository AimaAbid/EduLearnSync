import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Module.css";
import axios from "axios";

// import Footer from "../../pages/Footer";
// import icon1 from "../../assets/icon1.png";
// import iconThree from "../../assets/icon1of3.png";

export default function CourseDetails() {
	const [sidebarActive, setSidebarActive] = useState(true);
	const { moduleId } = useParams();
	const [questions, setQuestions] = useState([]);
	const [selectedAnswer, setSelectedAnswer] = useState({});
	const [feedback, setFeedback] = useState({});
	const [data, setData] = useState(null);
	var userId=localStorage.getItem('userId');

	const toggleSidebar = () => {
		setSidebarActive(!sidebarActive);
	};

	
	var courseData = [
		{
			module: "1",
			subModule: "1.1",

			heading1: "1.1 The world of cybersecurity",
			description1:
				"Dive into the world of cybersecurity with this intro course! Learn how to protect yourself and your data from hackers and online threats. We'll cover the basics of network security, cryptography, and how to spot and stop cyber attacks. Perfect for anyone curious about digital safety or looking to start a career in cybersecurity. Get ready to become a cyber defender!",
			imgUrl1:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/f9c1711e8f1754a07219300314f0eb4a29e014ed.png",

			heading2: " What Is Cybersecurity?",
			description2:
				"Cybersecurity is the ongoing effort to protect individuals, organizations and governments from digital attacks by protecting networked systems and data from unauthorized use or harm.",
			imgUrl2:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/34f8a7184083921af8b21e8d933d7ce2368cb278.png",

			heading3: "Personal, Organizational ans Governmental Security",
			description3:
				"On a personal level, you need to safeguard your identity, your data, and your computing devices.At an organizational level, it is everyone’s responsibility to protect the organization’s reputation, data and customers.As more digital information is being gathered and shared, its protection becomes even more vital at the government level, where national security, economic stability and the safety and wellbeing of citizens are at stake.",
			imgUrl3:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/8b91cc10658d7b068100750070b51eae8279c1a3.png",

			imgUrl4:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/391f594b038b5fa248eef0876c0094ac00feca4e.png",

			heading4: "Protecting Your Personal Data",
			description4:
				"Personal data is any information that can be used to identify you, and it can exist both offline and online.Offline identity refers to the personal and identifiable information that individuals possess in the physical world, such as government-issued IDs, driver's licenses, social security numbers, and physical addresses. In cybersecurity, protecting offline identity involves measures to prevent identity theft, document fraud, and unauthorized access to physical records.Online identity pertains to the digital persona of individuals, which includes usernames, email addresses, social media profiles, and online behavior. In cybersecurity, safeguarding online identity focuses on protecting digital credentials, ensuring secure access to online services, and mitigating risks such as phishing, data breaches, and unauthorized access to personal and professional online accounts.",
		},
		{
			module: "1",
			subModule: "1.2",
			imgUrl1:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/d4f47065ce0c0b163050b4272f5302d8d4b1541d.png",
			heading1: "1.2 Types of Organizational Data",
			description1:
				"Traditional data is typically generated and maintained by all organizations, big and small. It includes the following.Transactional data such as details relating to buying and selling, production activities and basic organizational operations such as any information used to make employment decisions.Intellectual property such as patents, trademarks and new product plans, which allows an organization to gain economic advantage over its competitors. This information is often considered a trade secret and losing it could prove disastrous for the future of a company.Financial data such as income statements, balance sheets and cash flow statements, which provide insight into the health of a company.",

			heading2: "1.2.1.2 Internet of Things (IoT) and Big Data",
			imgUrl2:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/7f3d2a599897a9ae40227c984fdb7b555876fd3c.png",
			description2:
				"IoT is a large network of physical objects, such as sensors, software and other equipment. All of these ‘things’ are connected to the Internet, with the ability to collect and share data. And given that storage options are expanding through the cloud and virtualization, it’s no surprise that the emergence of IoT has led to an exponential growth in data, creating a new area of interest in technology and business called 'Big Data.'",

			imgUrl3:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/7f93b59b3a3816ca5ab00d9e61bf212f91f7802f.svg",
			heading3: "The Perisai Botnet Security Breach",
			description3:
				"The Perisai botnet security breach involved a massive network of infected devices used to launch coordinated cyber attacks. Hackers exploited vulnerabilities in IoT devices to create this botnet, targeting websites and online services. The breach caused significant disruptions and highlighted the need for stronger IoT security measures. Authorities and cybersecurity experts worked together to dismantle the botnet. The incident underscored the importance of regular software updates and robust security protocols for connected devices.",
			heading4: "The Equifax Botnet Security Breach",
			description4:
				"The Equifax botnet security breach was a major cyber attack that compromised sensitive data of millions of people. Hackers exploited vulnerabilities to access Equifax's systems, stealing personal information like social security numbers, addresses, and credit card details. The breach caused widespread financial and identity theft concerns. Equifax faced intense scrutiny and legal consequences for their security lapses. This incident emphasized the critical need for robust cybersecurity measures and timely vulnerability patching in protecting consumer data.",
			imgUrl4:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/17dc88e765f0bc674f7a1b2db5dae40d44c86975.png",
		},
		{
			module: "1",
			subModule: "1.3 What was Taken",
			heading1: "1.3.1 Scenario 1",
			description1:
				"Security breaches today are all too common, with attackers constantly finding new and innovative ways of infiltrating organizations in search of valuable information.",

			heading2: "1.3.2 What Happened?",
			imgURL2:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/7f93b59b3a3816ca5ab00d9e61bf212f91f7802f.svg",
			"description2.1":
				"According to our sources, a well known hotel chain that operates across the world has reported a massive data breach, with the personal information of over three million guests exposed to hackers.",
			"description2.2":
				"The hotel discovered that hackers gained access to its customer database by using the login details of one of its employees.",
			"description2.3":
				"At this point, the hotel doesn’t believe that the hackers were able to access any account passwords or financial information. Recent guests are encouraged to check the hotel chain’s web portal to see if they have been impacted by this breach.",
			"description2.4": "*This is a fictional scenario.",
			"description2.5":
				"In this example, the hackers take The names, email address and phone numbers of over three million hotel guests",

			heading3: "1.3.3 Scenario 2",
			"description3.1": "eLearning Platforms at Risk!",
			"description3.2":
				"The team at @Apollo is concerned. eLearning platforms are becoming prime targets for attackers as more and more organizations make the move to digital learning.",
			"imgURL3.1":
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/17dc88e765f0bc674f7a1b2db5dae40d44c86975.png",
			"description3.3":
				"A popular online training platform admitted leaving the personal data of millions of its students (many of them minors) exposed on a publicly accessible cloud database.",
			"imgURL3.2":
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/c164a798fdd1ca1ef86fc07357c9a74b8f1906c6.png",
			"description3.4":
				"Hackers were able to directly access students’ full names, email addresses, phone numbers, and school enrollment details from the Internet!",
			"imgURL3.3":
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/12d5b29d62648bd35e5357ab91d046147dce96d7.png",
			"description3.5":
				"While it’s unclear what the hackers have done with this acquired information, it’s safe to say that they have everything they need to carry out widespread phishing or malware attacks.",

			heading4: "1.3.4 What Exploits?",
			"description4.1":
				"The hackers use Weaknesses in the platform’s security practices to gain an access to valuable personal information.",

			heading5: "1.3.5 Rewind...",
			imgURL5:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m1/en-US/assets/c30002beb91df2a7cda30849eeee664d5dba837c.png",
			"description5.1":
				"Every organization is at risk of a cyber attack and therefore must take appropriate action to protect itself.",
			"description5.2":
				"Thinking back to each of the two security breach examples outlined above ",
			"description5.3":
				"In the first case , just by gaining one employee's login details hackers were able to access whole customer info ,I think this wrongs the concept of confidentiality and availability , they should have used data encryption ,2 factor authentication, hashing ,checksum",
			"description5.4":
				"or the second case the organization used publicly available cloud database,they made the job easy for hackers,they need to invest in cyber security , hire professionals who give suggestions and act accordingly",
		},

		{
			module: "2",
			subModule: "2.1",
			heading1: "Types of Malware",
			description1:
				"Cyber criminals use many different types of malicious software, or malware, to carry out their activities. Malware is any code that can be used to steal data, bypass access controls, or cause harm to or compromise a system. Knowing what the different types are and how they spread is key to containing and removing them.The different types of malicious software are",

			imgUrl1:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/07f0e2f906cd97ff1f0f126958069d3e811f3864.svg",
			heading2: "Spyware",
			description2:
				"Spyware is designed to track and spy on you, spyware monitors your online activity and can log every key you press on your keyboard, as well as capture almost any of your data, including sensitive personal information such as your online banking details. Spyware does this by modifying the security settings on your devices.It often bundles itself with legitimate software or Trojan horses.",
			imgUrl2:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/796839d33db82c8b5caceaeaa834eaaa467cd8d8.svg",
			heading3: "Adware",
			description3:
				"Adware is often installed with some versions of software and is designed to automatically deliver advertisements to a user, most often on a web browser. You know it when you see it! It’s hard to ignore when you’re faced with constant pop-up ads on your screen.",
			imgUrl3:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/796839d33db82c8b5caceaeaa834eaaa467cd8d8.svg",
			heading4: "Backdoor",
			description4:
				"Backdoor is used to gain unauthorized access by bypassing the normal authentication procedures to access a system. As a result, hackers can gain remote access to resources within an application and issue remote system commands.A backdoor works in the background and is difficult to detect.",
			imgUrl4:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/2260c6a3500db1258bb69bd97f66cc6ed015bc4c.svg",

			// "heading3":"2.1.2 Symptoms of Malware",
			// "description3.1":"One of the most common symptoms of malware is a noticeable decline in your device's performance. This includes slow startup times, lagging applications, and frequent crashes. Malware often uses a significant portion of your system's resources, causing your computer or smartphone to run much slower than usual.",
			// "description3.2":"If you start seeing a barrage of unexpected pop-ups, ads, or notifications, your device might be infected with adware. These intrusive advertisements often appear even when you're not browsing the internet, and they can lead to malicious websites if clicked."
		},
		{
			module: "2",
			subModule: "2.2",
			heading1: "2.2Methods of Infilteration- Social Engineering",
			description1:
				"Social engineering is the manipulation of people into performing actions or divulging confidential information. Social engineers often rely on people’s willingness to be helpful, but they also prey on their weaknesses. For example, an attacker will call an authorized employee with an urgent problem that requires immediate network access and appeal to the employee’s vanity or greed or invoke authority by using name-dropping techniques in order to gain this access Some common types of social engineering attacks-",
			imgUrl1:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/22474f7ed64c2da6407565cc2baeb9390dc73653.png",

			heading2: "Denial-of-Service",
			description2:
				"Denial-of-Service (DoS) attacks are a type of network attack that is relatively simple to carry out, even by an unskilled attacker. A DoS attack results in some sort of interruption of network service to users, devices or applications.This disrupts normal operations, causing slowdowns or complete outages. Attackers often use multiple compromised systems in Distributed Denial of Service (DDoS) attacks to amplify the impact. DoS attacks can target various layers of an IT infrastructure, including the network, application, or server. Mitigating DoS attacks involves using security measures like firewalls, intrusion detection systems, and traffic analysis tools.",
			imgUrl2:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/b6da53ebd3b511ec38ce9720bd6470b256b93608.png",
			heading3: "Distributed DoS",
			description3:
				"A Distributed DoS (DDoS) attack is similar to a DoS attack but originates from multiple, coordinated sources. For example:An attacker builds a network (botnet) of infected hosts called zombies, which are controlled by handler systems.The zombie computers will constantly scan and infect more hosts, creating more and more zombies.When ready, the hacker will instruct the handler systems to make the botnet of zombies carry out a DDoS attack.",
			imgUrl3:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/d70ccb02199621b7b003c7b6527795fe6fde89e2.png",
			heading4: "Botnet",
			description4:
				"A bot computer is typically infected by visiting an unsafe website or opening an infected email attachment or infected media file. A botnet is a group of bots, connected through the Internet, that can be controlled by a malicious individual or group. It can have tens of thousands, or even hundreds of thousands, of bots that are typically controlled through a command and control server.These bots can be activated to distribute malware, launch DDoS attacks, distribute spam email, or execute brute-force password attacks. Cybercriminals will often rent out botnets to third parties for nefarious purposes.Many organizations. like Cisco, force network activities through botnet traffic filters to identify any botnet locations.",

			imgUrl4:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/3d4405f87b1589fca5237f49d8f539d18b6ef698.svg",
		},

		{
			module: "3",
			subModule: "3.1",
			heading1: "3.1 Protecting Your Devices and Network",
			description1:
				"You’ve probably heard of the term ‘online security.’ It’s all about taking the necessary steps to prevent your personal information from falling into the wrong hands.",
			imgUrl1:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/27d47672685b30559afa1d2d86208375aef37a1c.gif",
			imgUrl2:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/a8331083b7a28100c391ed33ecf9bdc4aca48a9f.png",
			imgUrl3:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/b993ff473310ef7b2d9bea3f0c14ca4901b0683b.png",
			imgUrl4:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m2/en-US/assets/a1a2dd4e8ba07b8f319eceac76057ee0ab73561f.png",

			heading2: "Protecting Your Computing Devices.How to do this?",
			description2:
				"Your computing devices are the portal to your online life, storing a lot of your personal data. Therefore, it’s important to protect the security of your devices.Turn the firewall on.Install antivirus and anti-spyware.Manage your operating system and browser.Set up password protection",

			heading3: "A Deeper Dive",

			description3:
				"You should use at least one type of firewall (either a software firewall or a hardware firewall on a router) to protect your device from unauthorized access. The firewall should be turned on and constantly updated to prevent hackers from accessing your personal or organization data.Malicious software, such as viruses and spyware, are designed to gain unauthorized access to your computer and your data. Once installed, viruses can destroy your data and slow down your computer. They can even take over your computer and broadcast spam emails using your account. Spyware can monitor your online activities, collect your personal information or produce unwanted pop-up ads on your web browser while you are online.",
			"description2.1.2.2":
				"To prevent this, you should only ever download software from trusted websites. However, you should always use antivirus software to provide another layer of protection. This software, which often includes anti_spyware, is designed to scan your computer and incoming email for viruses and delete them. Keeping your software up to date will protect your computer from any new malicious software that emerges.",

			description4:
				"Hackers are always trying to take advantage of vulnerabilities that may exist in your operating system (such as Microsoft Windows or macOS) or web browser (such as Google Chrome or Apple Safari).Therefore, to protect your computer and your data, you should set the security settings on your computer and browser to medium level or higher. You should also regularly update your computer’s operating system, including your web browser, and download and install the latest software patches and security updates from the vendors.All of your computing devices, including PCs, laptops, tablets and smartphones, should be password protected to prevent unauthorized access. Any stored information, especially sensitive or confidential data, should be encrypted. You should only store necessary information on your mobile device, in case it is stolen or lost.",
			"description2.1.4.2":
				"Remember, if any one of your devices is compromised, the criminals may be able to access all of your data through your cloud storage service provider, such as iCloud or Google Drive.",
		},
		{
			module: "3",
			subModule: "3.1",
			heading1: "3.1 Protecting Your Devices and Network",
			description1:
				"You’ve probably heard of the term ‘online security.’ It’s all about taking the necessary steps to prevent your personal information from falling into the wrong hands.",

			heading2: "3.1.1 Protecting Your Computing Devices",
			description2:
				"Your computing devices are the portal to your online life, storing a lot of your personal data. Therefore, it’s important to protect the security of your devices.",

			"heading2.1": " how to do this?",

			"heading2.1.1": "Turn the firewall on",
			"description2.1.1.1":
				"You should use at least one type of firewall (either a software firewall or a hardware firewall on a router) to protect your device from unauthorized access. The firewall should be turned on and constantly updated to prevent hackers from accessing your personal or organization data.",

			"heading2.1.2": "Install antivirus and anti-spyware",
			"description2.1.2.1":
				"Malicious software, such as viruses and spyware, are designed to gain unauthorized access to your computer and your data. Once installed, viruses can destroy your data and slow down your computer. They can even take over your computer and broadcast spam emails using your account. Spyware can monitor your online activities, collect your personal information or produce unwanted pop-up ads on your web browser while you are online.",
			"description2.1.2.2":
				"To prevent this, you should only ever download software from trusted websites. However, you should always use antivirus software to provide another layer of protection. This software, which often includes anti_spyware, is designed to scan your computer and incoming email for viruses and delete them. Keeping your software up to date will protect your computer from any new malicious software that emerges.",

			"heading2.1.3": "Manage your operating system and browser",
			"description2.1.3.1":
				"Hackers are always trying to take advantage of vulnerabilities that may exist in your operating system (such as Microsoft Windows or macOS) or web browser (such as Google Chrome or Apple Safari).",
			"description2.1.3.2":
				"Therefore, to protect your computer and your data, you should set the security settings on your computer and browser to medium level or higher. You should also regularly update your computer’s operating system, including your web browser, and download and install the latest software patches and security updates from the vendors.",

			"heading2.1.4": "Set up password protection",
			"description2.1.4.1":
				"All of your computing devices, including PCs, laptops, tablets and smartphones, should be password protected to prevent unauthorized access. Any stored information, especially sensitive or confidential data, should be encrypted. You should only store necessary information on your mobile device, in case it is stolen or lost.",
			"description2.1.4.2":
				"Remember, if any one of your devices is compromised, the criminals may be able to access all of your data through your cloud storage service provider, such as iCloud or Google Drive.",
		},
		{
			module: "3",
			subModule: "3.2",
			heading1: "Data Maintenance",
			description1:
				"Data protection is all about keeping your personal and business information safe from unauthorized access and breaches. It involves using encryption, strong passwords, and secure networks to shield your data. Regular backups ensure you don't lose important files if something goes wrong. Being cautious about where and how you share your information also helps prevent leaks. Overall, it's about staying vigilant and using the right tools to guard your digital life.",
			imgUrl1:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m3/en-US/assets/6c7d0e8dbf75a83cb4b73fdf5991548210b331fe.png",
			heading2: "Encryption",
			description2:
				"Encryption is the process of converting information into a form in which unauthorized parties cannot read it. Only a trusted, authorized person with the secret key or password can decrypt the data and access it in its original form.Note that the encryption itself does not prevent someone from intercepting the data. It can only prevent an unauthorized person from viewing or accessing the content. In fact, some criminals may decide to simply encrypt your data and make it unusable until you pay a ransom.Software programs are used to encrypt files, folders and even entire drives.Encrypting File System (EFS) is a Windows feature that can encrypt data. It is directly linked to a specific user account and only the user that encrypts the data will be able to access it after it has been encrypted using EFS.",

			imgUrl2:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m3/en-US/assets/8dc6c35c77974ac3df85bbe4bdf5d892a1f46caf.gif",
			imgUrl3:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m3/en-US/assets/0e266094040623560797646401c6900628013e39.png",
			imgUrl4:
				"https://skillsforall.com/content/i2cs/7.1/courses/content/m3/en-US/assets/a81b18359edd8b821ead882dfec476285ec72cca.png",

			heading3: "Data Backups",
			description3:
				"Having a backup may prevent the loss of irreplaceable data. To back up data properly, you will need an additional storage location for the data and you must copy the data to that location regularly.Data backups are crucial for keeping your important files safe. They involve making copies of your data and storing them in a secure place, like an external drive or the cloud. This way, if your computer crashes or you accidentally delete something, you can easily restore it. Regular backups ensure you don't lose valuable information. It's a simple step that gives you peace of mind.",

			heading4: "How Do You Delete Your Data Permanently?",
			description4:
				"Have you ever had to delete data or get rid of a hard drive? If so, did you take any precautions to safeguard the data to keep it from falling into the wrong hands.To erase data so that it is no longer recoverable, it must be overwritten with ones and zeroes multiple times, using tools specifically designed to do just that. SDelete from Microsoft claims to have ability to remove sensitive files completely. Shred for Linux and Secure Empty Trash for Mac OS X claim to provide a similar service .The only way to be certaIn that data or files are not recoverable is to physically destroy the hard drive or storage device. Many criminals have taken advantage of files thought to be impenetrable or irrecoverable.Don’t forget about data that may be stored online in the cloud. These copies will also need to be deleted.",
		},
		{
			module: "4",
			subModule: "4.1",
			heading1: "Security Appliances",
			description1:
				"Security appliances can be standalone devices like a router or software tools that are run on a network device. They fall into six general categories.",
			imgUrl1:
				"https://www.netacad.com/content/i2cs/7.1/courses/content/m4/en-US/assets/e20b7003c3b51b1c6353fbe585906f28fd7a5ddd.png",
			heading2: "Routers",
			description2:
				"Routers are networking devices that direct data between different networks, usually between a local network (like a home or office) and the internet. They determine the best path for data to travel and connect multiple devices to the same network, allowing them to communicate. Routers often include security features like firewalls and Wi-Fi management. They are essential for managing and optimizing network traffic, ensuring efficient and secure data transmission.",

			imgUrl2:
				"https://www.netacad.com/content/i2cs/7.1/courses/content/m4/en-US/assets/b68b121ae1c76d42c5b8bfbf159cf0b1082c7a77.png",
			imgUrl3:
				"https://www.netacad.com/content/i2cs/7.1/courses/content/m4/en-US/assets/3cc45f79a95caf01c2107337c142736c4d118b35.png",
			imgUrl4:
				"",

			heading3: "Firewalls",
			description3:
				"Firewalls are security systems designed to monitor and control incoming and outgoing network traffic based on predetermined security rules. They act as a barrier between trusted internal networks and untrusted external networks, like the internet, to block unauthorized access while allowing legitimate communication. Firewalls can be hardware-based, software-based, or a combination of both. They are crucial for protecting networks from cyber threats, such as hacking, malware, and unauthorized access.",

			heading4: "Intrusion Detection Systems",
			description4:
				"Intrusion Detection Systems (IDS) are security tools that monitor network or system activities for malicious actions or policy violations. They analyze traffic patterns to detect suspicious behavior, such as unauthorized access attempts, and alert administrators to potential threats. IDS can be network-based, monitoring traffic across the network, or host-based, focusing on individual devices. While IDS detect and report intrusions, they don't typically take action to block them, making them a key component in a layered security strategy.",
		},{
			
				module: "4",
				subModule: "4.2",
				heading1: "Behavior-Based Security",
				description1:
					"Behavior-based security is a form of threat detection that involves capturing and analyzing the flow of communication between a user on the local network and a local or remote destination. Any changes in normal patterns of behavior are regarded as anomalies, and may indicate an attack.",
				imgUrl1:
					"https://www.netacad.com/content/i2cs/7.1/courses/content/m4/en-US/assets/82cb4be0707c8d2eb8d119ebdad69e0af2312f34.svg",
				heading2: "HoneyPots",
				description2:
					"Honeypots are decoy systems or networks set up to attract and detect cyber attackers by mimicking real targets. They are designed to appear vulnerable, enticing attackers to engage with them, allowing security teams to monitor and analyze their methods without risking actual assets. Honeypots can provide valuable insights into attack strategies and help improve overall security. They serve as both a defensive mechanism and a research tool in cybersecurity.",
	
				imgUrl2:
					"https://www.netacad.com/content/i2cs/7.1/courses/content/m4/en-US/assets/4394ceafa9f013be13d77e9107d4e996d8bfbaac.svg",
				imgUrl3:
					"https://www.netacad.com/content/i2cs/7.1/courses/content/m4/en-US/assets/4394ceafa9f013be13d77e9107d4e996d8bfbaac.svg",
				imgUrl4:
					"",
	
				heading3: "NetFlow",
				description3:
					"NetFlow technology is used to gather information about data flowing through a network, including who and what devices are in the network, and when and how users and devices access the network.NetFlow is an important component in behavior-based detection and analysis. Switches, routers and firewalls equipped with NetFlow can report information about data entering, leaving and traveling through the network. This information is sent to NetFlow collectors that collect, store and analyze NetFlow data, which can be used to establish baseline behaviors on more than 90 attributes, such as source and destination IP address.",
	
				heading4: "Penetration Testing",
				description4:
					"Penetration testing, commonly known as pen testing, is the act of assessing a computer system, network or organization for security vulnerabilities. A pen test seeks to breach systems, people, processes and code to uncover vulnerabilities which could be exploited. This information is then used to improve the system’s defenses to ensure that it is better able to withstand cyber attacks in the future.",
			
		}
		// {
		// 	"module":"4",
		// 	"subModule":"4.1",
		// 	"heading1":"",
		// 	"description1":"",
		// 	"imgUrl1":""
		// }
	];
	useEffect(() => {
		// Fetching data based on the id parameter
		console.log("userId"+userId);
		const moduleData = courseData.find((item) => item.subModule === moduleId);
		if (moduleData) {
			setData(moduleData);
		} else {
			console.error(`No data found for id: ${moduleId}`);
		}
	}, [moduleId]);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/quiz/${moduleId}`)
			.then((response) => {
				setQuestions(response.data);
				
			})
			.catch((error) => {
				console.error("Error fetching quiz data:", error);
			});
	}, [moduleId]);

	if (!data) {
		return <div>Loading...</div>;
	}

	const handleAnswer = async (questionId) => {
		console.log("questionId"+questionId);
		
		const answer = selectedAnswer[questionId];
		console.log("answer"+answer);
		try {
			const response = await axios.post("http://localhost:8000/quiz/answers", {
				userId,
				questionId,
				selectedAnswer: answer,
			});
			setFeedback(prevFeedback => ({
				...prevFeedback,
				[questionId]: response.data,
			  }));
		} catch (error) {
			console.error("Error submitting answer:", error);
		}
		
	};

	return (
		<div className="course-container">
			<div className="course-header">
				<div className="header-items">EduLearnSync</div>
				<div className="header-items "><Link to="/course-list">Go Back</Link></div>
				<div className="header-items "><Link to="/performance-dashboard">Performance</Link></div>
				<div className="header-items "><Link to="/leaderboard">Leader Board</Link></div>
				<div className="header-items outline" onClick={toggleSidebar}>
					Course Outline
				</div>
			</div>

			<div className={`course-sidebar ${sidebarActive ? "active" : ""}`}>
				<h3>Course Outline</h3>
				<ul>
					<li>
						<Link to="/">Knowledge Check</Link>
					</li>
					<li>
						Module 1: Introduction to Cybersecurity
						<ul>
							<li>
								<Link to="/course-details/1.1">
									1.1 The World of Cybersecurity
								</Link>
							</li>
							<li>
								<Link to="/course-details/1.2">1.2 Organizational Data </Link>
							</li>
						</ul>
					</li>
					<li>
						Module 2: Attacks, Concepts and Techniques
						<ul>
							<li>
								<Link to="/course-details/2.1">2.1 Types of Malware</Link>
							</li>
							<li>
								<Link to="/course-details/2.2">
									2.2 Methods of Infiltration
								</Link>
							</li>
						</ul>
					</li>
					<li>
						Module 3: Protecting your Privacy
						<ul>
							<li>
								<Link to="/course-details/3.1">
									3.1 Protecting your Devices and Network
								</Link>
							</li>
							<li>
								<Link to="/course-details/3.2">3.2 Data Maintenance</Link>
							</li>
						</ul>
					</li>
					<li>
						Module 4: Protecting the Organization
						<ul>
							<li>
								<Link to="/course-details/4.1">
									4.1 Cybersecurity Devices and Technologies
								</Link>
							</li>
							<li>
								<Link to="/course-details/4.2">
									4.2 Behavior Approach to Cybersecurity
								</Link>
							</li>
						</ul>
					</li>
					<li>
						{" "}
						<Link to="/exam">Final Exam</Link>
					</li>
				</ul>
			</div>

			<div className={`course-content ${sidebarActive ? "active" : ""}`}>
				<section></section>
				<div className="container-fluid div-design">
					<div className="course-heading">
						{data.heading1 || "No heading available"}
					</div>
					<div className="desc">
						{data.description1 || "No description available"}
					</div>
					<div className="img-style-center">
						<img src={data.imgUrl1} alt="" />
					</div>

					<div className="course-heading">
						{data.heading2 || "No heading available"}
					</div>
					<div className="desc">
						{data.description2 || "No description available"}
					</div>
					<div className="img-style-center">
						<img src={data.imgUrl2} alt="" />
					</div>

					<div className="course-heading">
						{data.heading3 || "No heading available"}
					</div>
					<div className="desc">
						{data.description3 || "No description available"}
					</div>
					<div className="img-style-center">
						<img className="" src={data.imgUrl3} alt="" />
					</div>

					<div className="course-heading">
						{data.heading4 || "No heading available"}
					</div>
					<div className="desc">
						{data.description4 || "No description available"}
					</div>
					<div className="img-style-center">
						<img src={data.imgUrl4} alt="" />
					</div>

					<div>
						{questions.map((q) => (
							<div className="card question-card" key={q.id}>
								<p className="question-heading"><strong>{q.questionText}</strong></p>
								{Object.keys(q.options).map((optionKey) => (
									<div key={optionKey}>
										<div class="form-check">
										
											
									
										<input
											class="form-check-input"
												type="checkbox"
												
                                                id="defaultCheck1"
											value={optionKey}
											name={q.i}
											onChange={() =>
												setSelectedAnswer({
													...selectedAnswer,
													[q._id]: optionKey,
												})
											}
										/>
                                        <label class="form-check-label" for="defaultCheck1">
                                        <strong>{optionKey}:</strong> {q.options[optionKey]}
											</label>
                                            </div>
										
									</div>
								))}
								<br />
								<button className="btn btn-success" onClick={() => handleAnswer(q._id)}>Submit</button>
								{feedback[q._id] && (
            <div className="card card-feedback answerFeedback">
              {feedback[q._id].correct ? "Correct!" : "Wrong!"}  {feedback[q._id].insight}
            </div>
          )}
							</div>
						))}
						
					</div>
				</div>
			</div>
			{/* <footer/> */}
		</div>
	);
}
