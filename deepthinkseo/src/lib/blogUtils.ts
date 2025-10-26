import type { Metadata } from 'next'

export interface BlogPostData {
  title: string
  description: string
  keywords: string
  url: string
  publishedDate: string
  readingTime: string
  hook: string
  introduction: string
  sections: {
    heading: string
    content: string
  }[]
  conclusion: string
  semanticKeywords: string[]
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

export function generateBlogMetadata(postData: BlogPostData): Metadata {
  // Combine primary keywords with semantic keywords for better SEO
  const allKeywords = `${postData.keywords}, ${postData.semanticKeywords.slice(0, 20).join(', ')}`
  
  return {
    title: `${postData.title} | Deepthink SEO`,
    description: postData.description,
    keywords: allKeywords,
    openGraph: {
      title: `${postData.title} | Deepthink SEO`,
      description: postData.description,
      url: `https://deepthinkseo.online/blog/${postData.url}`,
      siteName: 'Deepthink SEO',
      images: [
        {
          url: postData.images[0]?.src || '/images/logo/logo.png',
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${postData.title} | Deepthink SEO`,
      description: postData.description,
      images: [postData.images[0]?.src || '/images/logo/logo.png'],
    },
    alternates: {
      canonical: `https://deepthinkseo.online/blog/${postData.url}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      // Add semantic keywords as structured data for search engines
      'semantic-keywords': postData.semanticKeywords.join(', '),
    },
  }
}

export function createBlogPostData(
  title: string,
  description: string,
  keywords: string,
  url: string,
  hook: string,
  introduction: string,
  sections: { heading: string; content: string }[],
  conclusion: string,
  semanticKeywords: string[],
  images: { src: string; alt: string; caption?: string }[]
): BlogPostData {
  // Calculate estimated word count
  const totalContent = introduction + sections.map(s => s.content).join(' ') + conclusion;
  const estimatedWordCount = totalContent.split(' ').length;
  
  // Calculate reading time based on word count (average 200 words per minute)
  const readingTimeMinutes = Math.ceil(estimatedWordCount / 200);
  
  return {
    title,
    description,
    keywords,
    url,
    publishedDate: 'January 16, 2025',
    readingTime: `${readingTimeMinutes} minutes`,
    hook,
    introduction,
    sections,
    conclusion,
    semanticKeywords,
    images
  }
}
