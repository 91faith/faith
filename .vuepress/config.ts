import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "./theme";

export default defineUserConfig({
  title: "Faith",
  description: "Just playing around",
  head: [
    ['link', {
        rel: 'stylesheet',
        href: `/iconfont/iconfont.css`
    }],["script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/iconfont/iconfont.js"
    }],
],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Faith",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "介绍",
          // text: "module one",
          children: [{ text: "关于我", link: "/docs/theme-reco/guanyuwo" },  {text: "我的足迹", link: "/docs/theme-reco/zuji"}],
        },
        // {
        //   text: "module two",
        //   children: ["api", "plugin"],
        // },
      ],
      "/docs/JYSC/": [
        {
          text: "精益生产",
          children: [{ text: "系统命令", link: "/docs/yunjisuan/XTML" },  {text: "Linux系统的文件结构", link: "/docs/yunjisuan/WJJG"}, ],
        },
        {
          text: "MES",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "WMS",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "6S管理",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "六西格玛",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "精益物流",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "仓库管理",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "OEE",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "KPI",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "节拍TAKT-TIME",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "防错法POKA-YOKE",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "柔性生产",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "ISO9001",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "IATF16949",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "5M1人机料发环",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "8D",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "质量管理",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "Vsm价值流程图",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "生产线平衡",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        {
          text: "供应链管理",
          children: [{ text: "精益", link: "/docs/JYSC/JY" }, "","生产", "plugin"],
        },
        // {
        //   text: "module two",
        //   children: ["api", "plugin"],
        // },
      ],
      "/docs/yunjisuan/": [
        {
          text: "Linux命令",
          children: [{ text: "系统命令", link: "/docs/yunjisuan/XTML" },  {text: "Linux系统的文件结构", link: "/docs/yunjisuan/WJJG"}, ],
        },
        {
          text: "Nginx",
          children: [{ text: "系统命令", link: "/docs/yunjisuan/XTML" },  {text: "Linux系统的文件结构", link: "/docs/yunjisuan/WJJG"}, ],
        },
        {
          text: "MySQL",
          children: [{ text: "系统命令", link: "/docs/yunjisuan/XTML" },  {text: "Linux系统的文件结构", link: "/docs/yunjisuan/WJJG"}, ],
        },
        {
          text: "SQLserver",
          children: [{ text: "系统命令", link: "/docs/yunjisuan/XTML" },  {text: "Linux系统的文件结构", link: "/docs/yunjisuan/WJJG"}, ],
        },
        {
          text: "Redis",
          children: [{ text: "系统命令", link: "/docs/yunjisuan/XTML" },  {text: "Linux系统的文件结构", link: "/docs/yunjisuan/WJJG"}, ],
        },
        {
          text: "zabbix",
          children: [{ text: "系统命令", link: "/docs/yunjisuan/XTML" },  {text: "Linux系统的文件结构", link: "/docs/yunjisuan/WJJG"}, ],
        },
        {
          text: "Docker",
          children: [{ text: "系统命令", link: "/docs/yunjisuan/XTML" },  {text: "Linux系统的文件结构", link: "/docs/yunjisuan/WJJG"}, ],
        },
        {
          text: "K8S",
          children: [{ text: "系统命令", link: "/docs/yunjisuan/XTML" },  {text: "Linux系统的文件结构", link: "/docs/yunjisuan/WJJG"}, ],
        },
        // {
        //   text: "module two",
        //   children: ["api", "plugin"],
        // },
      ],
      "/docs/iot/": [
        {
          text: "采集设备",
          children: [{ text: "Siemens802DSL-PLC接口", link: "/docs/iot/plcjiekou" },  {text: "Linux系统的文件结构", link: "/docs/iot/WJJG"}, ],
        },
        {
          text: "协议",
          children: [{ text: "S7协议", link: "/docs/iot/XTML" },  {text: "Linux系统的文件结构", link: "/docs/iot/WJJG"}, ],
        },
      ]
    },
    navbar: [
      { icon:"UserFilled",text: "简介", link: "/docs/theme-reco/yemian1" },
      { icon:"ChartBubblePacked",text: "智能制造", link: "/docs/JYSC/dsf" },
      { icon:"UserAvatarFilled",text: "项目", link: "/docs/theme-reco/theme" },
      { icon:"Carbon3DPrintMesh",text: "IOT", link: "/docs/iot/api" },
      { icon:"EarthSoutheastAsiaFilled",text: "云计算", link: "/docs/yunjisuan/plugin" },
    ],
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});

