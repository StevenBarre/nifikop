(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},O=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),O=o(n),j=a,u=O["".concat(c,".").concat(j)]||O[j]||p[j]||l;return n?r.a.createElement(u,b(b({ref:t},s),{},{components:n})):r.a.createElement(u,b({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=j;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var s=2;s<l;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),l=(n(0),n(162)),c={id:"6_listeners_config",title:"Listeners Config",sidebar_label:"Listeners Config"},b={unversionedId:"5_references/1_nifi_cluster/6_listeners_config",id:"5_references/1_nifi_cluster/6_listeners_config",isDocsHomePage:!1,title:"Listeners Config",description:"ListenersConfig defines the Nifi listener types :",source:"@site/../docs/5_references/1_nifi_cluster/6_listeners_config.md",slug:"/5_references/1_nifi_cluster/6_listeners_config",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/6_listeners_config",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/../docs/5_references/1_nifi_cluster/6_listeners_config.md",version:"current",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1610097720,sidebar_label:"Listeners Config",sidebar:"docs",previous:{title:"Node state",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/5_node_state"},next:{title:"External Service Config",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/7_external_service_config"}},i=[{value:"ListenersConfig",id:"listenersconfig",children:[]},{value:"InternalListener",id:"internallistener",children:[]},{value:"SSLSecrets",id:"sslsecrets",children:[]}],s={rightToc:i};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"ListenersConfig defines the Nifi listener types :"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'  listenersConfig:\n    internalListeners:\n      - type: "https"\n        name: "https"\n        containerPort: 8443\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n    sslSecrets:\n      tlsSecretName: "test-nifikop"\n      create: true\n')),Object(l.b)("h2",{id:"listenersconfig"},"ListenersConfig"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"internalListeners"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"["," ","]",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#internallistener"}),"InternalListener")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"specifies settings required to access nifi internally."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"sslSecrets"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#sslsecrets"}),"SSLSecrets")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"contains information about ssl related kubernetes secrets if one of the listener setting type set to ssl these fields must be populated to."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clusterDomain"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'allow to override the default cluster domain which is "cluster.local".'),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"cluster.local"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"useExternalDNS"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"allow to manage externalDNS usage by limiting the DNS names associated to each nodes and load balancer: ",Object(l.b)("inlineCode",{parentName:"td"},"<cluster-name>-node-<node Id>.<cluster-name>.<service name>.<cluster domain>")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")))),Object(l.b)("h2",{id:"internallistener"},"InternalListener"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'enum{ "cluster", "http", "https", "s2s"}'),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"allow to specify if we are in a specific nifi listener it's allowing to define some required information such as Cluster Port, Http Port, Https Port or S2S port"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"an identifier for the port which will be configured."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"containerPort"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int32"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the containerPort."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h2",{id:"sslsecrets"},"SSLSecrets"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tlsSecretName"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"should contain all ssl certs required by nifi including: caCert, caKey, clientCert, clientKey serverCert, serverKey, peerCert, peerKey."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"create"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tells the installed cert manager to create the required certs keys."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clusterScoped"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defines if the Issuer created is cluster or namespace scoped."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"issuerRef"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.cert-manager.io/en/release-0.9/reference/api-docs/index.html#objectreference-v1alpha1"}),"ObjectReference")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cIssuerRef allow to use an existing issuer to act as CA: ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://cert-manager.io/docs/concepts/issuer/"}),"https://cert-manager.io/docs/concepts/issuer/")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pkiBackend"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'enum{"cert-manager"}'),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}o.isMDXComponent=!0}}]);