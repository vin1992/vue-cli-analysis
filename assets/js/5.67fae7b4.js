(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{271:function(e,r,t){"use strict";t.r(r);var n=t(28),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue-cli-源码分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-源码分析"}},[e._v("#")]),e._v(" vue-cli 源码分析")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img.shields.io/badge/@vue/cli-v3.1.3-42b983.svg",alt:"@vue/cli"}}),e._v(" "),t("img",{attrs:{src:"https://img.shields.io/badge/@vue/cli--service-v3.1.4-42b983.svg",alt:"@vue/cli-service"}}),e._v(" "),t("img",{attrs:{src:"https://img.shields.io/badge/node-v8.11.4-brightgreen.svg",alt:"node-version"}}),e._v(" "),t("img",{attrs:{src:"https://img.shields.io/badge/platform-macOS%20%EF%A3%BF-000000.svg",alt:"platform"}}),e._v(" "),t("img",{attrs:{src:"https://github.com/KuangPF/vue-cli-analysis/workflows/Deploy%20to%20GitHub%20Pages/badge.svg",alt:"Github action"}}),e._v(" "),t("img",{attrs:{src:"https://img.shields.io/github/license/KuangPF/vue-cli-analysis.svg",alt:"License"}})]),e._v(" "),t("h2",{attrs:{id:"写在前面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[e._v("#")]),e._v(" 写在前面")]),e._v(" "),t("p",[e._v("其实最开始不是特意来研究 "),t("code",[e._v("vue-cli")]),e._v(" 的源码，只是想了解下 "),t("code",[e._v("node")]),e._v(" 的命令，如果想要了解 "),t("code",[e._v("node")]),e._v(" 命令的话，那么绕不开 "),t("a",{attrs:{href:"https://github.com/tj",target:"_blank",rel:"noopener noreferrer"}},[e._v("tj"),t("OutboundLink")],1),e._v(" 写的 "),t("a",{attrs:{href:"https://github.com/tj/commander.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("commander.js"),t("OutboundLink")],1),e._v("。在学习 "),t("a",{attrs:{href:"https://github.com/tj/commander.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("commander.js"),t("OutboundLink")],1),e._v(" 过程中发现 "),t("code",[e._v("vue-cli")]),e._v(" 的交互方式挺炫酷的，然后就去看了下源码，所以就有了这个仓库。")]),e._v(" "),t("p",[t("strong",[e._v("慎重提醒：我对 "),t("code",[e._v("vue-cli")]),e._v(" 的源码以及其中的一些知识点并不熟悉，如果我对其中的知识点非常了解的话我就不会来分析了，分析源码只是想更加了解 "),t("code",[e._v("vue-cli")]),e._v(" 整个工具的实现过程以及 "),t("code",[e._v("vue-cli3")]),e._v(" 的一些新特性。如果文中有描述有误，还请各位大大 issues or PR")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"相关说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关说明"}},[e._v("#")]),e._v(" 相关说明")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-cli"),t("OutboundLink")],1),e._v(" 仓库 dev 分支下面 package 目录包含了 "),t("code",[e._v("cli")]),e._v("，"),t("code",[e._v("cli-service")]),e._v("，"),t("code",[e._v("CLI 插件")]),e._v("，"),t("code",[e._v("UI 插件")]),e._v("，"),t("code",[e._v("cli 工具函数")]),e._v("代码等等。本项目中的 package 文件夹里面对其中的代码有一定的注释，主要集中在 "),t("code",[e._v("cli")]),e._v("，"),t("code",[e._v("cli-service")]),e._v(" 上，有兴趣的同学可以 fork 后查看。")]),e._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[e._v("#")]),e._v(" 目录")]),e._v(" "),t("h3",{attrs:{id:"vue-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli"}},[e._v("#")]),e._v(" @vue/cli")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("前言")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/foreword/",target:"_blank",rel:"noopener noreferrer"}},[e._v("介绍"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("开始")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/start/env.html/",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境介绍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/start/npm.html/",target:"_blank",rel:"noopener noreferrer"}},[e._v("常见 npm 包"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue create")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/create/",target:"_blank",rel:"noopener noreferrer"}},[e._v("create 入口"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/create/overall-analysis.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("整体分析"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/create/basic-verification.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("基础验证"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/create/get-preset.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("获取预设选项（preset）"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/create/install-deps.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("依赖安装（installDeps）"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/create/create/generator.html#",target:"_blank",rel:"noopener noreferrer"}},[e._v("Generator"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/create/end-part.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("结尾分析"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/create/summary.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("总结"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue add")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/add/",target:"_blank",rel:"noopener noreferrer"}},[e._v("add 入口"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/add/plugin-install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装插件"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/add/plugin-invoke.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("调用插件"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/add/summary.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("总结"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue invoke")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/invoke/",target:"_blank",rel:"noopener noreferrer"}},[e._v("invoke 命令"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue inspect")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/inspect/",target:"_blank",rel:"noopener noreferrer"}},[e._v("inspect 命令"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue serve")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/serve/",target:"_blank",rel:"noopener noreferrer"}},[e._v("serve 命令"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue build")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 命令"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue ui")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/ui/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ui 入口"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/ui/overall-analysis.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("整体分析"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/ui/server.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("server 端"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/ui/client.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("client 端"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/ui/summary.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("总结"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue init")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/init/",target:"_blank",rel:"noopener noreferrer"}},[e._v("init 入口"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/init/vue-cli-init-module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vue/cli-init 分析"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/init/vue-cli-init-2.x.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-cli 2.x init 分析"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/init/generate.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("generate 函数分析"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/init/summary.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("总结"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue config")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/config/",target:"_blank",rel:"noopener noreferrer"}},[e._v("config 命令"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue upgrade")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/upgrade/",target:"_blank",rel:"noopener noreferrer"}},[e._v("upgrade 命令"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("vue info")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/info/",target:"_blank",rel:"noopener noreferrer"}},[e._v("info 命令"),t("OutboundLink")],1)])])])]),e._v(" "),t("h3",{attrs:{id:"vue-cli-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-service"}},[e._v("#")]),e._v(" @vue/cli-service")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("整体介绍")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/cli-service/entrance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("入口"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/cli-service/new-service.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("new Service()"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/cli-service/service-run.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("service.run()"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("内置插件")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/cli-service/serve.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("serve"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/cli-service/build.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("build"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/cli-service/inspect.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("inspect"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kuangpf.com/vue-cli-analysis/cli-service/help.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("help"),t("OutboundLink")],1)])])])]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("vue-cli-analysis 整个项目可大致分为两个部分，一部分是 vue 命令分析，包含 create，add，invoke， ui 等等，另一部分就是 vue-cli-service 的分析。通过分析发现与 2.X 相比，3.0 变化太大了，通过引入插件系统，可以让开发者利用其暴露的 API 对项目进行扩展。在分析之前对插件机制不是很了解，不知道如何实现的，分析之后逐渐了解了其实现机制，而且对于 vue 项目的配置也更加熟悉了。除此之外，在分析过程过程中还了解了很多有意思的 npm 包，比如 execa， debug， lowdb，lodash，inquirer 等等，最后，如果你想学习 node 命令或者想写一些比较有意思的命令行工具的话，阅读 vue-cli 源码是一个不错的选择。")])])}),[],!1,null,null,null);r.default=a.exports}}]);