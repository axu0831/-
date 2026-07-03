import { Project, JournalEntry, ExplorationItem, WorkExperience } from './types';
import philipsShaverImg from './assets/images/philips_shaver_618_1780364525627.png';

export const PERSONAL_INFO = {
  name: "庄嘉绪",
  enName: "JiaXu Zhuang",
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop', // Beautiful placeholder or styled avatar
  email: "axu0831@163.com",
  phone: "18686123406",
  mbti: "ENFJ (主人公型人格)",
  location: "北京",
  enLocation: "Beijing, CN",
  experience: "5年设计经验",
  education: {
    school: "通化师范学院",
    degree: "本科 · 视觉传达设计",
    period: "2017 - 2021"
  },
  summary: "具备7年扎实美术功底与5年电商/视觉设计的一线实战经验。擅长色彩搭配、版式排版、复杂大促节点（618 / 双11等）高曝光大屏和高转化率广告投放图设计。拥有成熟的用户思维与C4D三维场景建构能力，能将商业诉求完美转化为具备强视觉张力的画语言。同时，作为拥有十余场大型晚会主持经验的ENFJ，具备出色的团队协作与跨职能沟通协调能力，在大促或紧急项目中表现出强大的抗压和自我驱动力。",
  skills: [
    { name: "电商视觉设计", percent: 95 },
    { name: "C4D三维场景构建", percent: 88 },
    { name: "广告投放高点击视觉", percent: 92 },
    { name: "品牌创意企划", percent: 85 },
    { name: "版式与字体排版", percent: 90 },
    { name: "用户体验思维", percent: 80 }
  ],
  certifications: [
    "高等学校英语应用能力 B 级",
    "普通话二级甲等 (极佳表达功底)",
    "全国计算机二级",
    "驾驶证 C1"
  ],
  socials: {
    github: "https://github.com",
    zcool: "https://www.zcool.com.cn",
    behance: "https://www.behance.net",
    wechat: "axu0831"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "proj_01",
    title: "飞利浦男士理容电商投放广告视觉",
    enTitle: "Philips Grooming E-comm Ad Campaigns",
    category: "大促banner / 站内外电商广告投放",
    enCategory: "E-comm Campaign & 3D Environment",
    description: "独立负责飞利浦京东自营旗舰店广告投放素材图制作，负责日常 & 618 大促全节点，落地车图、京选店铺、品牌品专、站内首焦、站外开屏全点位素材与投放。助力新品首发，大促节点等，优化视觉逻辑后广告点击率、投产比显著提升。",
    image: philipsShaverImg,
    gridSpan: "md:col-span-12",
    ratioClass: "aspect-[1176/555]",
    client: "Philips (飞利浦)",
    tag: "Aesthetics • Conversion",
    details: [
      "投放素材：京东全资源位设计，车主图 / 店铺装修 / 京选 / 品专 / 大促 KV / 站内外多尺寸广告图全链路产出；",
      "AI赋能：通过AI提效，还原剃须刀金属机身质感，根据使用场景、类目人群定制不同场景素材。",
      "投放优化：结合京东用户热区数据优化版式，精简画面信息，提升广告引流效率与成交转化。"
    ]
  },
  {
    id: "proj_02",
    title: "英特尔系列电商广告投放",
    enTitle: "Intel Brand Kampaign & Ad Campaigns",
    category: "大促banner / 站内外电商广告投放",
    enCategory: "E-comm Campaign & Visual Design",
    description: "负责英特尔(Intel)核心台式机、笔记本等电竞芯片及搭载新一代酷睿处理器的各合作品牌整机在电商大促节点的首焦Banner与高转化级广告投放。在京东自营等主流电商全点位(站内车图、首焦站外开屏信息流等)落地高匹配的视觉素材，针对硬核参数逻辑进行精炼的信息降噪，使复杂、硬核的PC芯片在有限画幅中实现爆款级引流，广告点击率与ROI投产比大幅超预期表现。",
    image: "https://i.postimg.cc/Q9m6ZfP7/1280X720-ying-te-er-tai-shi-ji-hui-chang-100167985293.jpg",
    gridSpan: "md:col-span-12",
    ratioClass: "aspect-[1176/555]",
    client: "intel/英特尔",
    tag: "Performance • Conversions",
    details: [
      "全域大促：主导日常及618、双11重磅大促核心全链路视觉落地，高密度覆盖京东品专、京选店铺、站内首焦等核心投放资源。",
      "视觉降噪：针对芯片复杂的专业参数指标进行多维度‘降维重现’设计，减少文字废话流，让顶级电竞核心卖点一秒呈现。",
      "精准构图：融入黄金比例焦距及高对比机械能电竞灯效排版，结合精准的用户热区视焦行为，实现广告引爆性的高频停留与超凡溢价。"
    ]
  },
  {
    id: "proj_04",
    title: "京东汽车/京东养车系列电商广告投放",
    enTitle: "JD Auto & JD Car Care Campaigns",
    category: "站外信息流广告banner/站外开机屏广告",
    enCategory: "E-comm Auto Campaign & Visual Design",
    description: "负责京东汽车、京东养车及各合作品牌在电商大促和日常节点的首焦Banner、推广信息流及站外开屏广告。通过融合硬核越野场景风、高性能极速机械感与极简信息层，减少繁杂多余的配文，让轮胎、机油、车顶帐篷等重度车品核心卖点一秒呈现，在各大电商平台(站内外开屏、车图等全渠道投放)实现非凡引流，RO投产比与点击浏览率大幅领衔行业均值水平。",
    image: "https://i.postimg.cc/9FLBTWs5/1280X720-yang-che-yu-bei-ban-shi.jpg",
    gridSpan: "md:col-span-12",
    ratioClass: "aspect-[16/9]",
    client: "京东汽车/京东养车",
    tag: "Performance • Auto Service",
    details: [
      "全域大促：主导大促及日常重磅营销全链路视觉，高密度覆盖京东品专、京选、直客店铺首焦及站内外全尺寸广告图投放。",
      "场景融合：通过高端实景氛围重塑，将硬核轮胎、润滑油、车载帐篷等车品完美放置于山野、都市极速或露营场景之中，用直观场景说故事，赋予干瘪的产品温润质地与高端品味格调。",
      "参数清晰：将车品极度繁复的技术规格（如适配型号、防滑指数、机油黏度等）通过现代网格高度降噪处理，变成一眼即识的视觉标签，彻底切中车主一线的挑选痛点，达成极速成交转换。"
    ]
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "journal_01",
    title: "怎么用 C4D 真实拟真渲染给产品带货？高转化率电商爆款打光攻略",
    enTitle: "How 3D Rendering Propels E-commerce CTR",
    category: "3D渲染 / 实战干货",
    date: "2026-05-18",
    readTime: "8 分钟阅读",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", // 3D abstract render with nice light
    summary: "为什么电商详情里的产品总是少了点高级感？核心在于‘逆向多光源模拟’和‘触觉型材质细节’。在这篇文章中，我将分享我是如何协助飞利浦在618项目里通过C4D建立无瑕金属质感模型并让点击转化率暴增24%的打光与材质流程。",
    content: "在电商视觉设计中，产品细节是支撑转化率的核心。很多设计师使用平面图进行堆叠，导致画面缺乏立体感与物理可信度。通过C4D的Octane/Redshift渲染器，我们能够重塑每一缕光线的反弹。首先是搭建环境：使用全遮光摄影棚，通过反射反光板建立过渡微弱的白边，突出修长线条。其二是材质微粗糙度设置：绝对光滑的杯面在渲染中会显得非常虚假，必须要附加微弱的凹凸噪声贴图。文章中将深度拆解从骨骼建构到终期细节调色的完整链路。"
  },
  {
    id: "journal_02",
    title: "大促突围战：如何设计一张点击率超同类产品1.5倍的流媒体开屏海报",
    enTitle: "Breaking Through: High-Converting Splash Ads Design",
    category: "广告投放 / 用户思维",
    date: "2026-04-12",
    readTime: "6 分钟阅读",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=800&auto=format&fit=crop", // Information flow, data chart, eye-catching
    summary: "在爱奇艺、QQ音乐、喜马拉雅等APP的1-3秒黄金黄金开机时间内，用户的眼球极度挑剔。要想在极短时间抓住视线，靠的不是浮夸的大红大绿，而是‘黄金焦距比例排版’与‘视线引流文案定位’。一起来了解我给菲拉格慕定制的高投产投放方法论。",
    content: "用户在等待广告跳过时的焦虑和防备心理极强。多余的信息、多余的线条只会带来厌恶感。所以，大促广告的核心法则：‘一主、一副，无冗余’。我们通过长焦微悬浮的香水瓶作为主视觉，让瓶内流动的金色流沙成为明度核心，让用户的视线第一落点正好在瓶盖区域，接着眼神自然向下流转到品牌Logo和极简英文核心优惠上。这是真正的美学设计融入行为生理学。"
  },
  {
    id: "journal_03",
    title: "ENFJ的职场自白：为什么情商与表达力是设计师最高级的隐形技能？",
    enTitle: "The Creative ENFJ: Empathy & Voice as Design Tools",
    category: "成长感悟 / 职场软实力",
    date: "2026-03-02",
    readTime: "5 分钟阅读",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop", // Meeting, collaboration, pleasant workspace
    summary: "作为在大学主持过十多场全校晚会、在公司也承包年会的主持人，我逐渐意识到——表达和同理心绝非可有可无。优秀的沟通能让团队在面对疯狂拼杀的大促节点时拧成一股绳。和运营扯皮、被否定稿件？试试改变沟通框架。",
    content: "很多优秀的设计师都会困在‘画地自牢’的艺术思维里，觉得运营和优化师都在瞎改。其实，设计是一门‘解决商业目的的艺术’。当我用ENFJ最天然的同理心去倾听运营的核心焦虑（曝光少、跳出率高）后，我转而向他们解释我的方案：‘为什么这个干净的排版能让信息接收效率高30%’。用商业价值证明美学选择。这样一转变，不仅沟通顺畅，团队能效也会飞跃，连大促加班氛围都能开开心心！"
  }
];

export const EXPLORATIONS: ExplorationItem[] = [
  {
    id: "exp_01",
    title: "3C数码",
    enTitle: "3C Digital & Tech Products",
    category: "3C 数码 / 3C Digital",
    image: "https://i.postimg.cc/5y4jfdf7/fang-kuai-suo-lue-tu3C-shu-ma.jpg",
    rotation: "-3deg",
    description: "深入触达核心用户，提供强视觉冲击与销售转化的高水准大促视觉资产。",
    subImages: [
      "https://i.postimg.cc/MH1rcjbg/1280X720-yu-bei-ban-shi-tong-xun-shou-ji-pin-lei-feng2.jpg",
      "https://i.postimg.cc/PxgRrMZ0/1280X720-tong-xun-jing-su-bang.jpg",
      "https://i.postimg.cc/63km5hRm/1280X720-feng-kuang-xing-qi-yi-yu-bei-ban-shi2.jpg",
      "https://i.postimg.cc/Twz4Ycm7/1280X720-kai-gong-kai-xue-ji-dian-nao-tou-tu-zhong-ban.jpg",
      "https://i.postimg.cc/1tkj5K6H/1280X720-shuang12yu-bei-ban-shi-3c-shu-ma-pin-lei-feng.jpg",
      "https://i.postimg.cc/qRP5MGn2/1280X720-3yue-qu-shi-ping-ban-hui-chang-10099483805605.jpg",
      "https://i.postimg.cc/JnDFLFy3/1280X720-3yue-chao-ji-qu-shi-xiang-mu-sheng-chan-ping-ban-dui-pin.jpg",
      "https://i.postimg.cc/Y9GPHP46/1280X720-3yue-kou-dai-zhu-ji-lian-xiang-100050087476.jpg",
      "https://i.postimg.cc/RF6YBY3J/1280X720-3c-shu-ma-yu-bei-ban-shi3.jpg",
      "https://i.postimg.cc/fLtPNP30/1280X720-3c-shu-ma-yu-bei-ban-shi.jpg",
      "https://i.postimg.cc/j5w1b1Wq/1280X720-3c-ban-gong-pei-jian-xiao-mi-100032329020.jpg"
    ]
  },
  {
    id: "exp_02",
    title: "大促banner",
    enTitle: "Mega Campaign Banners",
    category: "大促 Banner / Campaign Banner",
    image: "https://i.postimg.cc/KjG4mSmp/fang-kuai-suo-lue-tu-da-cu.jpg",
    rotation: "2deg",
    description: "精准把握各类目设计方向，用极具张力和传播度的大促视觉画面实现商业效益与美学表现的突破。",
    subImages: [
      "https://i.postimg.cc/YC6FfGNQ/1176X780pin-zhuan-fei-he-zhuo-rui.jpg",
      "https://i.postimg.cc/ZqJdfbj9/1280X720-1280X720-da-shang-chao-xiu-xian-ling-shi-nian-huo-jie.jpg",
      "https://i.postimg.cc/1zyqWmM8/1280X720-zhong-qiu-da-zi-bao-2.jpg",
      "https://i.postimg.cc/5tfCP4p6/1280X720-da-zi-bao-yu-bei-ban-shi.jpg",
      "https://i.postimg.cc/zfqgdzpK/1280X720-mei-zhuang-yu-bei-ban-shi-da-cu.jpg",
      "https://i.postimg.cc/d0JyWsnm/1280X720-yu-bei-ban-shi-mi-mian-liang-you-da-cu-feng.jpg",
      "https://i.postimg.cc/5tfCP4pS/1280X720-yu-bei-ban-shi-jiu-shui-nian-huo-jie.jpg",
      "https://i.postimg.cc/ZqJdfbjL/nian-huo-jie-yu-bei-ban-shi1.jpg",
      "https://i.postimg.cc/XvnC2jx8/nian-huo-jie-yu-bei-ban-shi2gai.jpg",
      "https://i.postimg.cc/zfqgdzp0/nian-huo-jie-yu-bei-ban-shi3.jpg",
      "https://i.postimg.cc/GpbyMLzX/gou-wu-ji1-8ri-1-9tou-mai-chao-shi-hao-wu-zhi-gao-fan499yuan-chao-shi-ka-chang-wen-nai-pin-lei-feng.jpg"
    ]
  },
  {
    id: "exp_03",
    title: "超市快消品",
    enTitle: "Supermarket & FMCG Goods",
    category: "超市快消 / Supermarket & FMCG",
    image: "https://i.postimg.cc/cHMrq4NN/fang-kuai-suo-lue-tu-kuai-xiao-pin.jpg",
    rotation: "-1.5deg",
    description: "直击大众消费心智，精雕细琢高点击的食品酒水与日用快消大促视觉，兼顾食欲美感与利益点传达。",
    subImages: [
      "https://i.postimg.cc/GtQsvZnh/1280X720-100307381250-gu-jing-gong.jpg",
      "https://i.postimg.cc/xjyHrbJ4/1280X720-zhong-qiu-yu-bei-ban-shi9-16.jpg",
      "https://i.postimg.cc/wxcJKsyP/1280X720-da-shang-chao-xiu-xian-ling-shi-pin-lei.jpg",
      "https://i.postimg.cc/FFgctJdP/1280X720-jia-qing-chu-you-ji.jpg",
      "https://i.postimg.cc/PfzZG8vn/1280X720-chao-shi-yu-bei-ban-shi.jpg",
      "https://i.postimg.cc/xjyHrbJZ/1280X720-chao-shi-yu-bei-ban-shi-2.jpg",
      "https://i.postimg.cc/KcrLXg3F/1280X720-yu-bei-ban-shi-chu-you-jia-qing.jpg",
      "https://i.postimg.cc/tCq69CF9/1280X720-yu-bei-ban-shi-xia-ri-sha-tan.jpg",
      "https://i.postimg.cc/KvGTmvtz/dan-pin-xiao-guan-cha-wu-long-cha-heng-13kai-tou-you-gai.jpg"
    ]
  },
  {
    id: "exp_04",
    title: "KV开屏",
    enTitle: "Key Visuals & Splash Screens",
    category: "KV开屏 / Key Visual & Splash",
    image: "https://i.postimg.cc/MTbvkKJP/fang-kuai-suo-lue-tu-kai-ping.jpg",
    rotation: "4deg",
    description: "高阶创意视觉Key Visual与开屏画幅设计，结合多元化媒介适配性与立体空间，实现顶级视觉传达效率。",
    subImages: [
      "https://i.postimg.cc/QdCgQkN5/tian-ke-100038193673-xiu-gai.jpg",
      "https://i.postimg.cc/bwTpppHQ/1080x1920-nian-huo-yu-bei-ban-shi.jpg",
      "https://i.postimg.cc/zf2NH7cx/1080x1920-xu-fu-ji-qu-duo-duo-ao-li-ao-lian-he-gai.jpg",
      "https://i.postimg.cc/bvVPSgB3/1080x1920-pai-pai-er-shou-100126499890-li-bai-xi-yi-ning-zhu34ke.jpg",
      "https://i.postimg.cc/fbRZbpBG/1080x1920-kong-diao-yu-bei-ban-shi-chu-you.jpg",
      "https://i.postimg.cc/YSD7LRsX/1080x1920-kong-diao-yu-bei-ban-shi-meng-huan.jpg",
      "https://i.postimg.cc/g0tpLs7n/1080x1920-yu-bei-ban-shi-kong-diao.jpg",
      "https://i.postimg.cc/7Lt4J9RZ/1080x1920-yu-bei-ban-shi-kong-diao-(2).jpg",
      "https://i.postimg.cc/xCk2vHrk/14-18hui-chang-shu3.jpg",
      "https://i.postimg.cc/85qVt5Dw/1764136714785.png",
      "https://i.postimg.cc/j2PY9bdm/2-15xin-pin-hui-chang-shu1.jpg",
      "https://i.postimg.cc/HWymjQ9D/25nian-Q1she-ji-bi-sai-zhuang-jia-xu-2gai.jpg",
      "https://i.postimg.cc/bYtPdQ9h/25nian-Q1she-ji-bi-sai-zhuang-jia-xu-gai.jpg",
      "https://i.postimg.cc/66vKTdfw/5-1hu-wai-dan-pin-8608-shu.jpg",
      "https://i.postimg.cc/SNbh9JgN/720x1280-jia-dian-wu-yi-yu-bei-ban-sheng.jpg",
      "https://i.postimg.cc/VLP8tdK5/720x1280-nian-huo-jie-da-zi-bao.jpg",
      "https://i.postimg.cc/65xXZyMZ/Q2-she-ji-bi-sai-zhong-ban.jpg",
      "https://i.postimg.cc/zXYrhVxW/Q4can-sai-zhuang-jia-xu-1-1.jpg",
      "https://i.postimg.cc/5NWVz6sw/Q4can-sai-zhuang-jia-xu-2.jpg",
      "https://i.postimg.cc/J43W5MFY/da-zi-bao-dong-ji.png",
      "https://i.postimg.cc/m23GyBnK/nian-huo-jia-qing.jpg",
      "https://i.postimg.cc/BnqfhRWR/xin-dong-gou-wu-ji-quan-zhou-qi-chao-shi-hao-wu-di-zhi5zhe-niu-nai-chang-jing-feng.jpg",
      "https://i.postimg.cc/T3RvkB8F/hu-wai-hui-chang-fen-hui-chang-yun-dong-xie.jpg",
      "https://i.postimg.cc/Jz1CTSwf/xin4yue-tai-shi-ji-1260-shu.jpg",
      "https://i.postimg.cc/XYV62tS6/gan-lin-di-pu-sha-fa10191999803244.jpg",
      "https://i.postimg.cc/zGJYd4Zq/yun-dong-hu-wai-zhu-hui-chang-yu-jia-fu.jpg"
    ]
  },
  {
    id: "exp_05",
    title: "投放快车图",
    enTitle: "Product Feed & Express Car Ads",
    category: "投放快车图 / Express Feed & Ads",
    image: "https://i.postimg.cc/kXVLT85t/che-tu-zhan-shi.jpg",
    rotation: "-2deg",
    description: "针对直通车、京东快车等站内投放量身定制，以极高信息密度与爆款级视觉排版，最大化拉动点击和销售转化。",
    subImages: [
      "https://i.postimg.cc/xdmGXfgx/fei-li-pu-OHC-2432fen-se-100027016609.jpg",
      "https://i.postimg.cc/cCkTQD3K/800-mg-SP9886-100060550898-9yue6zuo-1.jpg",
      "https://i.postimg.cc/DzGQSv5x/fei-li-pu-MG-fei-li-pu-PQ888-100037868066-520.jpg",
      "https://i.postimg.cc/wBN51qFF/niu-rui-you-618da-cu-che-tu2.jpg",
      "https://i.postimg.cc/6QZV8Wz0/niu-rui-you-100023398252.jpg",
      "https://i.postimg.cc/1X7MpWFF/800-9936-100019460176-qi-xi.jpg",
      "https://i.postimg.cc/5tz5X4p5/MG-xin-pin-S9618wei-zhen-tian-xian-ding-kuan9xi-100109219964-zuo-you-dai-ji-zhi-qu.jpg",
      "https://i.postimg.cc/FKSbYrGy/9407che-tu-2.jpg",
      "https://i.postimg.cc/1zF08mMc/6-1-18tai-shi-ji-dan-pin-4-gai.jpg",
      "https://i.postimg.cc/SK9LnSV9/100124557486-che-tu-mai-dian-ban-shi3.jpg"
    ]
  },
  {
    id: "exp_06",
    title: "家电家居",
    enTitle: "Home Appliances & Furnishings",
    category: "家电家居 / Home Appliances",
    image: "https://i.postimg.cc/B6cXWQGf/fang-kuai-suo-lue-tu-jia-dian-jia-ju.jpg",
    rotation: "3deg",
    description: "专注智能冰洗、高端影音、厨房卫浴等品类，定制立体质感场景与排版，兼具前沿美感与高频触达优势。",
    subImages: [
      "https://i.postimg.cc/d3KpDQCN/1280X720-Q1jia-pin-dao-rong-sheng-100063811879.jpg",
      "https://i.postimg.cc/Vvcp5stG/1280X720-san-xing.jpg",
      "https://i.postimg.cc/J0Wvt7X2/1280X720-le-xia-jia-zhuang-jie-wei-yu.jpg",
      "https://i.postimg.cc/7hydbPzc/1280X720-bing-xi-chu-shi-mi-si-10100781389788-hui-fu-de.jpg",
      "https://i.postimg.cc/brjWdYbX/1280X720-bing-xi-chu-fang-tai-10052512494313-yi-jiu-huan-xin.jpg",
      "https://i.postimg.cc/XJ5tVBrP/1280X720-rong-sheng-bing-xiang.jpg",
      "https://i.postimg.cc/gjPQrcRP/1280X720-hai-xin-10086471819075.jpg",
      "https://i.postimg.cc/SRp3jQ84/1280X720-hei-dian618-pop-hui-chang-chuang-wei-10098948430591.jpg",
      "https://i.postimg.cc/Znh20Y3Z/1280X720-hei-dian618-pop-hui-chang-hai-xin-10097240235914.jpg",
      "https://i.postimg.cc/FzQ81Fch/1280X720-hei-dian618-zi-ying-hui-chang-TCL-100095988623.jpg",
      "https://i.postimg.cc/Y0wZj2g2/dan-pin-xin-zeng5-heng-di-qi-ci.jpg"
    ]
  }
];

export const WORK_HISTORY: WorkExperience[] = [
  {
    company: "北京源东运营宝科技有限公司",
    role: "电商广告投放设计师 & 视觉设计师",
    period: "2022.07 - 至今",
    descriptions: [
      "统筹飞利浦、倍轻松、澳佳宝、同仁堂等知名品牌京东自营全链路广告视觉与投放设计：",
      "站内：负责店铺品专、京选资源位、商品车主图、首页首焦 Banner 全点位素材迭代与日常店铺视觉运维；",
      "站外：承接爱奇艺、QQ 音乐、腾讯新闻等多平台站外开屏、信息流广告视觉落地，完成全品类竞标广告创意制作；",
      "围绕 618 / 双 11 / 双 12 等大促节点独立落地全周期营销设计，同步带教新人、输出工作方法论。"
    ],
    achievements: [
      "大促业绩：负责的京东店铺 618 大促整体销量同比上涨 130%，优化素材版式持续提升广告点击率与产品转化；",
      "项目口碑：输出投放素材多次获得合作品牌官方认可，助力部门拿下京东京牌营销、五星广告代理商资质；",
      "团队赋能：担任新人导师，帮扶组员快速上手电商设计业务，连续两届主持公司年会。"
    ],
    brands: ["飞利浦 / Philips", "京东养车", "京东超市", "京东健康", "菲拉格慕 / Ferragamo", "洋河股份", "倍轻松", "同仁堂", "21金维他", "澳佳宝 / Blackmores"]
  },
  {
    company: "北京壹捌零数字技术有限公司 (180 Group)",
    role: "电商设计师",
    period: "2022.04 - 2022.07",
    descriptions: [
      "专注于主流头部客户如伊利、长安汽车等的数字媒体投放与竞标大片等营销节点的细节设计。",
      "协助多位顶级投放策略师 (Media Planner / Optimizer)，根据全域投放数据表现，以数小时内的敏捷效率进行投放图文和海报的响应优化、微调和重构，实现高转化转化漏斗迭代。"
    ],
    achievements: [
      "在伊利品牌活动节点中，配合全组在两周内完成数百款包含首焦、弹窗、优惠券等大流量高保真投放位的设计，极大赋能投产效能指标。",
      "深度优化了品牌大促大片的美学细节，确保素材完全符合五星高端审美标尺，展现极强业务能力。"
    ],
    brands: ["伊利集团", "长安汽车 / Changan Auto"]
  },
  {
    company: "北京世纪中投经贸有限公司",
    role: "视觉设计师",
    period: "2021.06 - 2022.03",
    descriptions: [
      "全面主导京东平台各类目明星产品的视觉创意全链条，涵盖年度/大促活动页整体格调把控、推广图绘制、宝贝详情重构排版、主屏以及店铺装修等。",
      "全天候支持、对接和维护日常新品发布图文详情，高频次与业务线运营团队开会探讨营销海报的创意转译和画面故事呈现。"
    ],
    achievements: [
      "深度经手并参与了618、双11、双12及年货节大主力战，负责美的（Midea）、苏泊尔（Supor）、LG等跨国、世界500强品牌不同细分品类项目。",
      "拥有极强、敏锐的线上视觉营销洞察力，擅长挖掘产品技术点（卖点），转化为兼备趣味性与深度的图影语言，实现单店访客高时长驻留和狂揽订单。"
    ],
    brands: ["美的 / Midea", "苏泊尔 / Supor", "乐金 / LG Electronics"]
  },
  {
    company: "优设网 (UISDC)",
    role: "公众号运营编辑 & 音视频策划 (实习)",
    period: "2020.11 - 2021.01",
    descriptions: [
      "独立企划并完成优设网优质视频公众号、视频号（优设计）前中后期的视频编导、剪辑和发布，提炼先锋设计行业最新资讯与高端字体布局排版教程。",
      "在设计内容中心协助大主编和资深视觉专家设计公众号配图及日常活动的海报，磨砺了精湛、老练的手册型平面设计排版规范。"
    ],
    achievements: [
      "实习期间编导制作的数期优质设计类资讯视频录得高赞播放量。积累了深邃的、契合行业第一梯队水平的‘黄金排版’‘版面张力’高阶品味。"
    ],
    brands: ["优设网 / UISDC"]
  }
];
