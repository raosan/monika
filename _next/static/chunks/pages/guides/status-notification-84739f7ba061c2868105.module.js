(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"+sOn":function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a("wx14"),l=a("Ff2n"),b=a("q1tI"),i=a.n(b),o=a("7ljp"),r=a("er9C"),c=(i.a.createElement,{id:"status-notification",title:"Status Notification"}),s={meta:c},u=e=>{var{children:t}=e,a=Object(l.a)(e,["children"]);return Object(o.b)(r.a,Object(n.a)({meta:c},a),t)};function p(e){var{components:t}=e,a=Object(l.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Monika sends status notification periodically based on a set schedule with the following information:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Host"),Object(o.b)("li",{parentName:"ul"},"Number of probes"),Object(o.b)("li",{parentName:"ul"},"Average response time in the last 24 hours"),Object(o.b)("li",{parentName:"ul"},"Incidents in the last 24 hours"),Object(o.b)("li",{parentName:"ul"},"Recoveries in the last 24 hours"),Object(o.b)("li",{parentName:"ul"},"Number of sent notifications in the last 24 hours"),Object(o.b)("li",{parentName:"ul"},"Application version")),Object(o.b)("p",null,"By default the schedule is set to 6:00 AM everyday. You can configure the schedule with cron syntax via command line argument like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'monika --status-notification "0 6 * * *"\n')),Object(o.b)("p",null,"or via the configuration file with the ",Object(o.b)("inlineCode",{parentName:"p"},"status-notification")," field like below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"notifications:\n  - id: desktop\n    type: desktop\nprobes:\n  - requests:\n      - url: http://example.com\nstatus-notification: 0 6 * * *\n")),Object(o.b)("p",null,"You can also choose to disable this feature altogether. Just set the value to ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"monika --status-notification false\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"notifications: ...\nprobes: ...\nstatus-notification: false\n")),Object(o.b)("h2",{id:"cron-syntax"},"Cron Syntax",Object(o.b)("a",{parentName:"h2",href:"#cron-syntax",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"To schedule the status notification we use standard cron syntax. You can tryout your configuration on ",Object(o.b)("a",{parentName:"p",href:"https://crontab.guru/"},"crontab.guru"),"."),Object(o.b)("p",null,"In addition to the standard 5 cron syntax, Monika supports an optional ",Object(o.b)("inlineCode",{parentName:"p"},"seconds")," field. So if you wrote 6 cron syntax, please be advised that the status notification could be sent so frequent."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"}," \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 second (optional)\n \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute\n \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour\n \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of month\n \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500 month\n \u2502 \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500 day of week\n \u2502 \u2502 \u2502 \u2502 \u2502 \u2502\n \u2502 \u2502 \u2502 \u2502 \u2502 \u2502\n * * * * * *\n")),Object(o.b)("h3",{id:"valid-field-values"},"Valid Field Values",Object(o.b)("a",{parentName:"h3",href:"#valid-field-values",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Field"),Object(o.b)("th",{parentName:"tr",align:null},"Data"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"second"),Object(o.b)("td",{parentName:"tr",align:null},"0-59")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"minute"),Object(o.b)("td",{parentName:"tr",align:null},"0-59")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hour"),Object(o.b)("td",{parentName:"tr",align:null},"0-23")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"day"),Object(o.b)("td",{parentName:"tr",align:null},"1-31")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"month"),Object(o.b)("td",{parentName:"tr",align:null},"1-12 (or month names)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"day of the week"),Object(o.b)("td",{parentName:"tr",align:null},"0 - 7, or names (0 and 7 are Sunday)")))),Object(o.b)("p",null,"Examples:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'status-notification "1,2,5,7 * * * *"\n')),Object(o.b)("p",null,"Notifies every minutes 1, 2, 5 and 7. In other words every xx:01, xx:02, xx:05, xx:07 of every hour."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'status-notification "1-5 * * * *"\n')),Object(o.b)("p",null,"Notifies with the range of minute 1 to 5."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'status-notification "*/2 * * * *"\n')),Object(o.b)("p",null,"Notifies every two minutes."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'status-notification "* * * Feb,Mar Sun"\n')),Object(o.b)("p",null,"Notifies every Sunday in February and March."))}p.isMDXComponent=!0},"rwl+":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/status-notification",function(){return a("+sOn")}])}},[["rwl+",0,1,2,3,4]]]);