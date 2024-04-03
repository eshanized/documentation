"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[3327],{949:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=i(4848),o=i(8453);const t={sidebar_position:1},a="Build Snigdha OS",s={id:"dev_guide/build_source",title:"Build Snigdha OS",description:"Overview",source:"@site/docs/dev_guide/build_source.md",sourceDirName:"dev_guide",slug:"/dev_guide/build_source",permalink:"/documentation/dev_guide/build_source",draft:!1,unlisted:!1,editUrl:"https://github.com/Snigdha-OS/documentation/tree/master/docs/dev_guide/build_source.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developers Guide",permalink:"/documentation/category/developers-guide"},next:{title:"Write PKGBUILD",permalink:"/documentation/dev_guide/pkgbuild"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Adding Repository",id:"adding-repository",level:2},{value:"Cloning Source from GitHub",id:"cloning-source-from-github",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"build-snigdha-os",children:"Build Snigdha OS"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["Building ",(0,r.jsx)(n.strong,{children:"Snigdha OS"})," from the source code is very easy. In this documentation, I am going to guide you on how to build ",(0,r.jsx)(n.strong,{children:"Snigdha OS"})," from the source. And customizing it."]}),"\n",(0,r.jsx)(n.admonition,{title:"Caution",type:"danger",children:(0,r.jsxs)(n.p,{children:["Before running or customizing any script, first examine. Remember, you are running all the scripts produced by ",(0,r.jsx)(n.strong,{children:"Snigdha OS"})," at your own risk!"]})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["To build ",(0,r.jsx)(n.strong,{children:"Snigdha OS"})," from the source, we need some packages which are hosted on ",(0,r.jsx)(n.a,{href:"https://github.com/snosmirror/snigdhaos-core",children:"SNIGDHA OS CORE"})," repository and ",(0,r.jsx)(n.a,{href:"https://github.com/snosmirror/snigdhaos-extra",children:"SNIGDHA OS EXTRA"})," repository. ",(0,r.jsx)(n.a,{href:"https://github.com/snosmirror/snigdhaos-testing",children:"SNIGDHA OS TESTING"})," is an optional repository. You also need ",(0,r.jsx)(n.strong,{children:"Chaotic-AUR"})," because some packages come from the chaotic-aur. e.g : github-desktop."]}),"\n",(0,r.jsx)(n.admonition,{title:"NOTE",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure you have internet connection."}),"\n",(0,r.jsxs)(n.li,{children:["If you are on ",(0,r.jsx)(n.strong,{children:"Snigdha OS"}),", you need not add any repository! By default all the repositories are added and enabled."]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"adding-repository",children:"Adding Repository"}),"\n",(0,r.jsxs)(n.p,{children:["First of all we will add ",(0,r.jsx)(n.strong,{children:"Snigdha OS Core"})," and ",(0,r.jsx)(n.strong,{children:"Snigdha OS Extra"})," repository in our pacman configuration. to edit ",(0,r.jsx)(n.code,{children:"pacman.conf"}),", execute the following on your terminal. [I am using nano, you are free to use anything]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/pacman.conf\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"Archlinux",type:"tip",children:[(0,r.jsxs)(n.p,{children:["If you are using ",(0,r.jsx)(n.strong,{children:"Arch Linux"})," then you can copy and paste the following."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#\n# /etc/pacman.conf\n#\n# See the pacman.conf(5) manpage for option and repository directives\n\n#\n# GENERAL OPTIONS\n#\n[options]\n# The following paths are commented out with their default values listed.\n# If you wish to use different paths, uncomment and update the paths.\n#RootDir     = /\n#DBPath      = /var/lib/pacman/\n#CacheDir    = /var/cache/pacman/pkg/\n#LogFile     = /var/log/pacman.log\n#GPGDir      = /etc/pacman.d/gnupg/\n#HookDir     = /etc/pacman.d/hooks/\nHoldPkg     = pacman glibc\n#XferCommand = /usr/bin/curl -L -C - -f -o %o %u\n#XferCommand = /usr/bin/wget --passive-ftp -c -O %o %u\n#CleanMethod = KeepInstalled\nArchitecture = auto\n\n# Pacman won't upgrade packages listed in IgnorePkg and members of IgnoreGroup\n#IgnorePkg   =\n#IgnoreGroup =\n\n#NoUpgrade   =\n#NoExtract   =\n\n# Misc options\n#UseSyslog\n#Color\n#NoProgressBar\nCheckSpace\n#VerbosePkgLists\n#ParallelDownloads = 5\n\n# By default, pacman accepts packages signed by keys that its local keyring\n# trusts (see pacman-key and its man page), as well as unsigned packages.\nSigLevel    = Required DatabaseOptional\nLocalFileSigLevel = Optional\n#RemoteFileSigLevel = Required\n\n# NOTE: You must run `pacman-key --init` before first using pacman; the local\n# keyring can then be populated with the keys of all official Arch Linux\n# packagers with `pacman-key --populate archlinux`.\n\n#\n# REPOSITORIES\n#   - can be defined here or included from another file\n#   - pacman will search repositories in the order defined here\n#   - local/custom mirrors can be added here or in separate files\n#   - repositories listed first will take precedence when packages\n#     have identical names, regardless of version number\n#   - URLs will have $repo replaced by the name of the current repo\n#   - URLs will have $arch replaced by the name of the architecture\n#\n# Repository entries are of the format:\n#       [repo-name]\n#       Server = ServerName\n#       Include = IncludePath\n#\n# The header [repo-name] is crucial - it must be present and\n# uncommented to enable the repo.\n#\n\n# The testing repositories are disabled by default. To enable, uncomment the\n# repo name header and Include lines. You can add preferred servers immediately\n# after the header, and they will be used before the default mirrors.\n\n#[core-testing]\n#Include = /etc/pacman.d/mirrorlist\n\n[core]\nInclude = /etc/pacman.d/mirrorlist\n\n[snigdhaos-core]\nSigLevel = Never\nServer = https://snosmirror.github.io/$repo/$arch\n\n#[extra-testing]\n#Include = /etc/pacman.d/mirrorlist\n\n[extra]\nInclude = /etc/pacman.d/mirrorlist\n\n[snigdhaos-extra]\nSiglevel = Never\nServer = https://snosmirror.github.io/$repo/$arch\n\n# If you want to run 32 bit applications on your x86_64 system,\n# enable the multilib repositories as required here.\n\n#[multilib-testing]\n#Include = /etc/pacman.d/mirrorlist\n\n[multilib]\nInclude = /etc/pacman.d/mirrorlist\n\n# An example of a custom package repository.  See the pacman manpage for\n# tips on creating your own repositories.\n#[custom]\n#SigLevel = Optional TrustAll\n#Server = file:///home/custompkgs\n"})})]}),"\n",(0,r.jsx)(n.p,{children:"After executing, paste the following at the end of the file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n[snigdhaos-core]\nSigLevel = Never\nServer = https://snosmirror.github.io/$repo/$arch\n\n[snigdhaos-extra]\nSiglevel = Never\nServer = https://snosmirror.github.io/$repo/$arch\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"SigLevel",type:"info",children:(0,r.jsxs)(n.p,{children:["If you have ",(0,r.jsx)(n.code,{children:"SnigdhaOS-keyring"})," installed on the machine or you want to ",(0,r.jsx)(n.a,{href:"/dev_guide/install_keyring",children:"install"})," then you can set the ",(0,r.jsx)(n.strong,{children:"SigLevel = Required DatabaseOptional"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"You are ready to build Snigdha OS!"}),"\n",(0,r.jsx)(n.h2,{id:"cloning-source-from-github",children:"Cloning Source from GitHub"}),"\n",(0,r.jsxs)(n.p,{children:["Now, clone the ",(0,r.jsx)(n.code,{children:"snigdhaos-arctic"})," github repository. In addition, you can make a separate directory to do that. Go to your specified/choosen directory, execute the following on terminal."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Snigdha-OS/snigdhaos-arctic.git\n"})}),"\n",(0,r.jsx)(n.p,{children:"then,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd snigdhaos-arctic/scripts\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"SET EXECUTABLE",type:"info",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"chmod +x ./01-online-build\n"})})}),"\n",(0,r.jsx)(n.p,{children:"Now run the script by executing,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./01-online-build\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The script will start building ",(0,r.jsx)(n.strong,{children:"Snigdha OS Arctic"}),". You can have a coffee break while building. The building depends on ",(0,r.jsx)(n.strong,{children:"Internet Connection"})," and machine's ",(0,r.jsx)(n.strong,{children:"Performance"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["After completing, you will find a directory with name ",(0,r.jsx)(n.strong,{children:"Output"})," containing the iso file."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var r=i(6540);const o={},t=r.createContext(o);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);