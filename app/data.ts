type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Student Dashboard',
    description:
      'A web application designed to help students easily view and manage their academic information.',
    link: '#',
    image: '/image/studentdashboard.png',
    id: 'project1',
  },
  {
    name: 'Landing Pages for Events and Courses',
    description:
      'Development of multiple landing pages aimed at promoting academic events, workshops, and courses.',
    link: '#',
    image: '/image/lps.gif',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Grupo Educacional Filadélfia',
    title: 'Front-End Developer',
    start: '2024',
    end: 'Present',
    link: 'https://fafiltec.edu.br',
    id: 'work1',
  },
  {
    company: 'Grupo Educacional Filadélfia',
    title: 'IT Support Assistant',
    start: '2022',
    end: '2024',
    link: 'https://fafiltec.edu.br',
    id: 'work2',
  },
  {
    company: 'Ometele | Gaules S.A',
    title: 'Community Moderator',
    start: '2023',
    end: 'Present',
    link: 'https://omeletecompany.com/gaules/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/vinicarvc',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/vinicius-carvalho-296039253',
  },
]

export const EMAIL = 'vinicarvalhodevf@gmail.com'
