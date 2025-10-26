# Blog Template Guide for Deepthink SEO

## Overview
This guide explains how to use our blog post template system to create consistent, SEO-optimized blog posts with 4-5 images each.

## Template Components

### 1. BlogPostTemplate Component
Location: `src/components/BlogPostTemplate.tsx`

This reusable component handles:
- Consistent layout and styling
- 4-5 image placement (hero, content, conclusion)
- SEO-optimized structure
- Responsive design
- Header and Footer integration

### 2. Blog Utilities
Location: `src/lib/blogUtils.ts`

Helper functions for:
- `generateBlogMetadata()` - Creates SEO metadata
- `createBlogPostData()` - Structures blog post data
- Type definitions for consistent data structure

## How to Create a New Blog Post

### Step 1: Create the Page File
Create a new file in `src/app/blog/[slug]/page.tsx`

### Step 2: Use the Template
```typescript
import type { Metadata } from 'next'
import BlogPostTemplate from '@/components/BlogPostTemplate'
import { generateBlogMetadata, createBlogPostData } from '@/lib/blogUtils'

const postData = createBlogPostData(
  "Your Blog Post Title",
  "Meta description for SEO",
  "keywords, separated, by, commas",
  "url-slug",
  "Hook paragraph that grabs attention",
  "Introduction paragraph(s) explaining the topic",
  [
    {
      heading: "Section 1 Heading",
      content: "Section 1 content with multiple paragraphs..."
    },
    {
      heading: "Section 2 Heading", 
      content: "Section 2 content..."
    }
    // Add more sections as needed
  ],
  "Conclusion paragraph that wraps up the post and includes call-to-action",
  [
    "semantic", "keywords", "for", "SEO", "optimization"
  ],
  [
    {
      src: '/images/blog/hero-image.jpg',
      alt: 'Hero Image Alt Text',
      caption: 'Optional caption for hero image'
    },
    {
      src: '/images/blog/content-image.jpg',
      alt: 'Content Image Alt Text',
      caption: 'Optional caption for content image'
    },
    {
      src: '/images/blog/technical-image.jpg',
      alt: 'Technical Image Alt Text'
    },
    {
      src: '/images/blog/conclusion-image.jpg',
      alt: 'Conclusion Image Alt Text'
    }
  ]
)

export const metadata: Metadata = generateBlogMetadata(postData)

export default function YourBlogPostPage() {
  return <BlogPostTemplate postData={postData} />
}
```

## Image Guidelines

### Required Images (4-5 per post)
1. **Hero Image** - Main featured image at the top
2. **Content Image** - Supporting image in first content section
3. **Technical/Process Image** - Image showing technical concepts or processes
4. **Conclusion Image** - Final image before conclusion
5. **Optional Additional Image** - Extra supporting image if needed

### Image Specifications
- **Format**: JPG or PNG
- **Dimensions**: 800x400px (hero), 600x300px (content)
- **File Size**: Under 200KB each
- **Alt Text**: Descriptive, SEO-friendly
- **Captions**: Optional but recommended for context

### Image Placement
- Hero image appears after the title
- Content images appear between sections
- Conclusion image appears before the conclusion
- Images are automatically responsive

## Content Guidelines

### Using the 5-Step AI Prompt System
1. **SEO-Optimized Content Outline** - Title, meta description, H2s, semantic keywords
2. **Engaging Introduction** - Hook with stats/quotes, conversational tone
3. **Comprehensive Body** - Personal anecdotes, practical tips, specific advice
4. **Strong Conclusion** - Recap, call-to-action, reader engagement
5. **Semantic Keywords** - 50+ relevant keywords for better rankings

### Content Requirements for 1600+ Words
- **Minimum 1600 words total** for optimal SEO performance
- **400+ words per H2 section** to ensure depth and value
- **Subheadings (H3s)** within sections for better structure
- **Detailed examples and case studies** in each section
- **Step-by-step instructions** where applicable
- **Specific data and statistics** to support claims
- **Real-world scenarios** and practical applications

### Writing Style
- Conversational, first-person tone
- Personal anecdotes and experiences
- Practical, actionable advice
- Mix of short and long sentences
- 400+ words per section minimum
- Natural keyword integration
- Use **bold text** for subheadings within sections
- Include bullet points and numbered lists for clarity

## SEO Features

### Automatic SEO Optimization
- Meta titles and descriptions
- Open Graph and Twitter cards
- Canonical URLs
- Structured data (JSON-LD)
- Image alt text and captions
- Semantic keyword integration (hidden from frontend)
- Keywords in metadata
- Article structured data

### Manual SEO Elements
- Target keyword in title
- Keywords in headings (H2s)
- Natural keyword density
- Internal linking opportunities
- Call-to-action placement

### Hidden SEO Elements
- **Semantic Keywords**: Hidden from frontend but included in:
  - Page metadata (first 20 keywords)
  - Structured data (JSON-LD)
  - Hidden HTML element for search engines
- **Structured Data**: JSON-LD schema for better search understanding
- **Word Count**: Automatically calculated for article length

## Blog Post Checklist

### Before Publishing
- [ ] Title includes target keyword
- [ ] Meta description is compelling and under 160 characters
- [ ] Introduction has a strong hook
- [ ] Content is 1600+ words total (minimum for SEO)
- [ ] Each H2 section has 400+ words
- [ ] Subheadings (H3s) used within sections
- [ ] Detailed examples and case studies included
- [ ] 4-5 high-quality images included
- [ ] All images have descriptive alt text
- [ ] Conclusion includes call-to-action
- [ ] 50+ semantic keywords listed
- [ ] URL slug is SEO-friendly
- [ ] Content is proofread and error-free
- [ ] Word count verified (use template's automatic calculation)

### After Publishing
- [ ] Add to blog sitemap
- [ ] Share on social media
- [ ] Monitor performance in Google Analytics
- [ ] Track keyword rankings
- [ ] Respond to comments

## Example Blog Posts

### Created with Template
1. "What SEO Still Works in 2025" - SEO strategy
2. "5 Reasons You Need a Digital Marketing Strategy" - Marketing strategy
3. "How AI is Revolutionizing Customer Experience" - AI and marketing
4. "Content Marketing Matters" - Content strategy
5. "The Importance of Building Citations" - Local SEO

### Template Benefits
- **Consistency**: All posts follow the same structure
- **Efficiency**: Faster content creation
- **SEO**: Built-in optimization features
- **Images**: Automatic image placement and optimization
- **Maintenance**: Easy to update styling across all posts

## Next Steps

1. **Create More Blog Posts**: Use the template to create the remaining 115+ blog posts
2. **Replace Placeholder Images**: Add real, high-quality images
3. **Optimize Content**: Use the 5-step AI system for each post
4. **Monitor Performance**: Track rankings and traffic
5. **Update Regularly**: Keep content fresh and relevant

## Support

For questions about the blog template system, refer to:
- `src/components/BlogPostTemplate.tsx` - Template component
- `src/lib/blogUtils.ts` - Helper functions
- Existing blog posts for examples
