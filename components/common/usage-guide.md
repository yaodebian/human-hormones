# 激素详情页面组件使用指南

本文档提供了激素详情页面各个组件的使用方法和示例代码，帮助你快速构建激素详情页面。

## 基本结构

激素详情页面通常包含以下几个部分：

1. 激素标题区域 (`HormoneHeader`)
2. 定义与机制部分 (`DetailSection` + `DetailGrid`)
3. 何时分泌部分 (`DetailSection` + `FactCard`)
4. 影响与功能部分 (`DetailSection` + `TipsList`)
5. 食物与活动部分 (`DetailSection` + `FoodGrid`/`ActivityGrid`)
6. 研究与建议部分 (`DetailSection` + `HighlightBox`)
7. 与其他激素的关系部分 (`RelatedHormones`)

## 组件使用示例

### 1. HormoneHeader - 激素标题组件

```tsx
import { HormoneHeader } from '@/components/common';

<HormoneHeader
  title="多巴胺：驱动与奖励的化学信使"
  description="多巴胺是大脑中的一种神经递质，被称为"奖励激素"，在动机、快乐感和专注力方面起着关键作用。"
  icon="/images/dopamine.svg"
  color="dopamine"
/>
```

### 2. DetailSection - 内容区块组件

```tsx
import { DetailSection, DetailGrid } from '@/components/common';

<DetailSection title="什么是多巴胺？">
  <DetailGrid>
    <div>
      {/* 左侧内容 */}
      <p>多巴胺是一种在中枢神经系统中发挥重要作用的神经递质和激素。它由大脑中的特定神经元产生，特别是在中脑的黑质和腹侧被盖区。</p>
      {/* 更多内容... */}
    </div>
    <div>
      {/* 右侧图片或其他内容 */}
      <HormoneImage 
        src="/images/dopamine-pathway.svg" 
        alt="多巴胺通路" 
      />
    </div>
  </DetailGrid>
</DetailSection>
```

### 3. FactCard - 事实卡片组件

```tsx
import { DetailSection, DetailGrid, FactCard } from '@/components/common';

<DetailSection 
  title="多巴胺何时分泌？" 
  description="多巴胺在多种情况下被释放，主要与预期奖励、实际奖励和新奇体验相关："
>
  <DetailGrid cols={2}>
    <FactCard title="预期奖励" color="dopamine">
      <p>多巴胺不仅在获得奖励时释放，更重要的是在<span className="hormone-accent">预期</span>奖励时释放。实际上，对奖励的期待往往比获得奖励本身产生更强的多巴胺反应。</p>
    </FactCard>
    
    <FactCard title="新奇体验" color="dopamine">
      <p>接触<span className="hormone-accent">新的、意外的或不同寻常的刺激</span>会引发多巴胺释放。这种机制鼓励我们探索环境，学习新技能，尝试新事物。</p>
    </FactCard>
    
    {/* 更多卡片... */}
  </DetailGrid>
</DetailSection>
```

### 4. HighlightBox - 强调框组件

```tsx
import { HighlightBox } from '@/components/common';

<HighlightBox title="多巴胺与成瘾的关系" color="dopamine">
  <p>各种成瘾物质（如酒精、尼古丁、可卡因）和行为（赌博、社交媒体）之所以具有成瘾性，是因为它们能直接或间接地过度刺激大脑的多巴胺系统。</p>
  <p>随着时间推移，重复接触这些强烈刺激会导致多巴胺系统适应性改变，包括受体敏感性下降和奖励阈值上升。</p>
</HighlightBox>
```

### 5. TipsList - 提示列表组件

```tsx
import { TipsList } from '@/components/common';

<TipsList
  color="dopamine"
  items={[
    {
      title: "提高动机和驱动力",
      description: "多巴胺水平充足时，我们更有动力追求目标，克服挑战。"
    },
    {
      title: "增强专注力和学习能力",
      description: "适量的多巴胺有助于维持注意力，促进学习和记忆过程。"
    },
    {
      title: "多巴胺过低",
      description: "可能导致动力不足、情绪低落、注意力问题和厌倦感。",
      items: [
        "动机不足",
        "情绪低落",
        "注意力问题"
      ]
    }
    // 更多项目...
  ]}
/>
```

### 6. FoodGrid - 食物网格组件

```tsx
import { FoodGrid } from '@/components/common';

<FoodGrid 
  items={[
    { icon: "🥚", name: "蛋类" },
    { icon: "🧀", name: "奶酪" },
    { icon: "🍌", name: "香蕉" },
    { icon: "🥬", name: "绿叶蔬菜" },
    { icon: "🥜", name: "坚果和种子" },
    { icon: "🐟", name: "富含蛋白质的鱼类" },
    { icon: "🍫", name: "黑巧克力" },
    { icon: "🍎", name: "苹果" }
  ]}
/>
```

### 7. ActivityGrid - 活动网格组件

```tsx
import { ActivityGrid } from '@/components/common';

<ActivityGrid 
  items={[
    { icon: "🏃‍♀️", name: "持续性有氧运动" },
    { icon: "🧘", name: "瑜伽和冥想" },
    { icon: "🏊‍♂️", name: "游泳" },
    { icon: "🚴‍♀️", name: "骑自行车" },
    { icon: "💃", name: "舞蹈" },
    { icon: "🏋️", name: "力量训练" },
    { icon: "⛰️", name: "徒步旅行" },
    { icon: "🧠", name: "正念练习" }
  ]}
/>
```

### 8. RelatedHormones - 相关激素组件

```tsx
import { RelatedHormones } from '@/components/common';

<RelatedHormones
  title="多巴胺与其他激素的关系"
  items={[
    {
      id: "endorphin",
      name: "多巴胺与内啡肽",
      relation: "这两种物质常一起工作，特别是在运动时。内啡肽提供"跑步者高潮"的镇痛效果，而多巴胺提供动力和满足感。",
      link: "/hormones/endorphin"
    },
    {
      id: "serotonin",
      name: "多巴胺与血清素",
      relation: "这两种神经递质在情绪调节中相互平衡。多巴胺与动机和愉悦相关，而血清素则与情绪稳定和满足感相关。",
      link: "/hormones/serotonin"
    }
  ]}
/>
```

### 9. HormoneText - 文本强调组件

```tsx
import { HormoneText } from '@/components/common';

<HormoneText
  color="dopamine"
  text="多巴胺不仅在获得奖励时释放，更重要的是在<span class='hormone-accent'>预期</span>奖励时释放。实际上，对奖励的期待往往比获得奖励本身产生更强的多巴胺反应。"
/>
```

## 完整页面示例

以下是一个简化的多巴胺详情页面示例：

```tsx
import { 
  HormoneHeader, 
  DetailSection, 
  DetailGrid, 
  FactCard, 
  HighlightBox,
  TipsList,
  FoodGrid,
  ActivityGrid,
  RelatedHormones,
  HormoneImage
} from '@/components/common';

export default function DopaminePage() {
  return (
    <main>
      <HormoneHeader
        title="多巴胺：驱动与奖励的化学信使"
        description="多巴胺是大脑中的一种神经递质，被称为"奖励激素"，在动机、快乐感和专注力方面起着关键作用。"
        icon="/images/dopamine.svg"
        color="dopamine"
      />
      
      {/* 定义部分 */}
      <DetailSection title="什么是多巴胺？">
        {/* 内容 */}
      </DetailSection>
      
      {/* 何时分泌部分 */}
      <DetailSection title="多巴胺何时分泌？">
        {/* 内容 */}
      </DetailSection>
      
      {/* 其他部分... */}
      
      {/* 相关激素部分 */}
      <DetailSection>
        <RelatedHormones
          items={[
            // 相关激素列表...
          ]}
        />
      </DetailSection>
    </main>
  );
}
```

## 色彩主题

各激素对应的颜色主题：

- 多巴胺 (dopamine): 粉色
- 内啡肽 (endorphin): 紫色
- 血清素 (serotonin): 黄色
- 催产素 (oxytocin): 橙色
- 皮质醇 (cortisol): 绿色

在组件中使用 `color` 属性设置对应的激素主题色。 