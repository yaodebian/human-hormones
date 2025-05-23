# 人体激素科普网站设计稿

## 设计概述

这个文件夹包含人体激素科普网站的设计稿，包括HTML和CSS实现，以及SVG资源。设计遵循现代化、清爽的风格，既专业又易于理解，适合普通大众学习激素知识。

## 文件结构

```
UI-design/
├── assets/             # SVG图标和插图
│   ├── logo.svg        # 网站logo
│   ├── brain.svg       # 大脑与激素位置图解
│   ├── dopamine.svg    # 多巴胺图标
│   ├── endorphin.svg   # 内啡肽图标
│   ├── serotonin.svg   # 血清素图标
│   ├── oxytocin.svg    # 催产素图标
│   └── cortisol.svg    # 皮质醇图标
├── styles.css          # 共享样式表
├── index.html          # 首页设计
├── dopamine.html       # 多巴胺详情页（作为其他激素页面的模板）
├── language-switcher.js # 多语言切换功能示例
└── README.md           # 本文档
```

## 设计决策

### 色彩方案

- **主色调**：蓝色 (#2563eb)，代表科学、专业和可信赖
- **辅助色**：青色 (#14b8a6)，增添活力与现代感
- **激素专属颜色**：
  - 多巴胺：粉色 (#ec4899)
  - 内啡肽：紫色 (#8b5cf6)
  - 血清素：黄色 (#fbbf24)
  - 催产素：橙色 (#f97316)
  - 皮质醇：绿色 (#10b981)

这些颜色不仅视觉上令人愉悦，而且通过色彩编码帮助用户识别和记忆不同激素。

### 排版

- 主要字体：Inter（无衬线字体），干净、现代、易读
- 字体大小响应式调整，确保在各种设备上可读性

### 布局结构

#### 首页设计

1. **醒目的英雄区域**：大标题和简介，配以大脑和激素位置图解
2. **介绍部分**：解释为什么了解激素很重要
3. **激素卡片区**：五种核心激素的简介和入口
4. **关键事实区域**：激素平衡的重要知识点

#### 详情页设计（以多巴胺为例）

详情页采用统一的结构，包含以下部分：

1. **视觉化标题区**：带有对应颜色和图标
2. **定义与机制**：解释激素是什么及其作用机制
3. **分泌时机**：何时会分泌该激素
4. **影响部分**：对身体和心理的影响
5. **食物与活动**：有助于平衡该激素的食物和活动
6. **相关研究与建议**：科学研究和实用建议
7. **与其他激素的关系**：展示激素之间的联系

### 响应式设计

设计使用弹性布局，确保在各种设备上（从手机到大屏桌面）都能提供良好体验：

- 移动设备：单列布局，优化可读性
- 平板设备：两列网格布局
- 桌面设备：多列布局，利用更大的屏幕空间

### 多语言支持

- 设计考虑了多语言支持（中文、英文、日文、韩文）
- 语言选择器位于导航栏，并在页脚提供快速链接
- language-switcher.js 展示了如何实现语言切换功能

### 设计元素

- **卡片UI**：信息以卡片形式呈现，清晰分隔不同内容块
- **自定义SVG图标**：专为每种激素设计的图标，增强识别性
- **信息图表**：用于解释复杂概念
- **强调框**：突出显示重要信息
- **统一的视觉语言**：保持整站风格一致性

## 实现说明

这些设计稿是使用纯HTML和CSS创建的，可以作为前端开发的基础。在实际项目中，我们会：

1. 使用Next.js框架实现
2. 使用TailwindCSS进行样式管理
3. 使用Shadcn UI组件库增强界面
4. 添加适当的交互和动画
5. 实现完整的响应式布局
6. 添加多语言支持功能

## 注意事项

- 所有设计都考虑了可访问性，包括颜色对比度和标签清晰度
- SVG图标设计简洁明了，确保在小尺寸下仍然清晰可辨
- 页面布局保持一致性，便于用户快速适应和导航 