import { ResearchResource, ArticleResource, VideoResource, BookResource } from '@/lib/types/resources';

export const researchResources: ResearchResource[] = [
  {
    id: 'endocrine-system-overview',
    type: 'research',
    title: {
      'zh-CN': '内分泌系统：概述',
      'en-US': 'The Endocrine System: An Overview',
      'ja-JP': '内分泌系の概要',
      'ko-KR': '내분비계: 개요'
    },
    description: {
      'zh-CN': '这是一篇关于人体内分泌系统的权威综述文章，详细介绍了激素如何调节身体的生长发育、新陈代谢、电解质平衡和生殖功能。文章涵盖了下丘脑、垂体、肾上腺、性腺、甲状腺、甲状旁腺和胰腺等主要内分泌腺体的功能和调节机制。',
      'en-US': 'A comprehensive review of the human endocrine system that details how hormones regulate growth and development, metabolism, electrolyte balances, and reproduction. The article covers the functions and regulatory mechanisms of major endocrine glands including the hypothalamus, pituitary, adrenal glands, gonads, thyroid, parathyroid, and pancreas.',
      'ja-JP': '人体の内分泌系に関する包括的なレビュー論文で、ホルモンが成長と発達、代謝、電解質バランス、生殖をどのように調節するかを詳しく説明しています。下視床下部、下垂体、副腎、生殖腺、甲状腺、副甲状腺、膵臓などの主要な内分泌腺の機能と調節メカニズムをカバーしています。',
      'ko-KR': '인체 내분비계에 대한 포괄적인 리뷰 논문으로, 호르몬이 성장과 발달, 신진대사, 전해질 균형, 생식을 어떻게 조절하는지 자세히 설명합니다. 시상하부, 뇌하수체, 부신, 생식선, 갑상선, 부갑상선, 췌장 등 주요 내분비선의 기능과 조절 메커니즘을 다룹니다.'
    },
    authors: {
      'zh-CN': 'Susanne Hiller-Sturmhöfel, Andrzej Bartke',
      'en-US': 'Susanne Hiller-Sturmhöfel, Andrzej Bartke',
      'ja-JP': 'Susanne Hiller-Sturmhöfel, Andrzej Bartke',
      'ko-KR': 'Susanne Hiller-Sturmhöfel, Andrzej Bartke'
    },
    journal: {
      'zh-CN': '酒精健康研究世界',
      'en-US': 'Alcohol Health and Research World',
      'ja-JP': 'アルコール健康研究世界',
      'ko-KR': '알코올 건강 연구 세계'
    },
    publishedAt: '1998-01-01T00:00:00Z',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6761896/',
    tags: ['dopamine', 'serotonin', 'cortisol']
  }
];

export const articleResources: ArticleResource[] = [];
export const videoResources: VideoResource[] = [];
export const bookResources: BookResource[] = []; 