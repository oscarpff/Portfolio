export interface Writeup {
  title: string;
  platform: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Insane";
  description: string;
  tags: string[];
  link?: string;
  isExternal?: boolean;
}

export const writeups: Writeup[] = [
  {
    title: "Active Directory Lab",
    platform: "HackTheBox",
    difficulty: "Hard",
    description: "Complete AD domain compromise including Kerberoasting, AS-REP roasting, and DCSync attacks for full domain admin access.",
    tags: ["Active Directory", "Kerberos", "Windows", "Lateral Movement"],
  },
  {
    title: "Mr Robot",
    platform: "TryHackMe",
    difficulty: "Medium",
    description: "Based on the TV show. WordPress enumeration, brute-forcing login, reverse shell exploitation, and SUID privilege escalation.",
    tags: ["WordPress", "Linux", "SUID", "Web Exploitation"],
  },
  {
    title: "Buffer Overflow Prep",
    platform: "TryHackMe",
    difficulty: "Hard",
    description: "Comprehensive buffer overflow practice covering stack-based overflows, bad character detection, and shellcode generation.",
    tags: ["Buffer Overflow", "Assembly", "Python", "Exploitation"],
  },
  {
    title: "Blue",
    platform: "HackTheBox",
    difficulty: "Easy",
    description: "Windows machine exploiting MS17-010 EternalBlue vulnerability. Learned SMB enumeration, Metasploit exploitation, and privilege escalation techniques.",
    tags: ["Windows", "SMB", "EternalBlue", "Metasploit"],
  },
  {
    title: "Pickle Rick",
    platform: "TryHackMe",
    difficulty: "Easy",
    description: "Web application security challenge focusing on command injection and directory traversal to find hidden ingredients.",
    tags: ["Web App", "Command Injection", "Linux", "Enumeration"],
  },
  {
    title: "Ophiuchi",
    platform: "HackTheBox",
    difficulty: "Medium",
    description: "YAML deserialization attack on a Java web application, leading to code execution and container escape.",
    tags: ["Java", "Deserialization", "YAML", "Container"],
  },
];

// IDs of writeups to feature (0-indexed)
export const featuredWriteupIds = [0,];
