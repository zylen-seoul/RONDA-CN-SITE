/**
 * NewsSection — Architectural Minimalism
 * Three news cards with hover effects
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NEWS_IMAGES = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
];

export default function NewsSection() {
  const { t } = useLanguage();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  const articles = [
    { dateKey: 'news.1.date', titleKey: 'news.1.title', excerptKey: 'news.1.excerpt' },
    { dateKey: 'news.2.date', titleKey: 'news.2.title', excerptKey: 'news.2.excerpt' },
    { dateKey: 'news.3.date', titleKey: 'news.3.title', excerptKey: 'news.3.excerpt' },
  ];

  return (
    <section id="news" className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-divider" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#2C3340] max-w-lg leading-tight">
              {t('news.title')}
            </h2>
            <p className="font-body text-sm text-[#8A8A85] max-w-xs leading-relaxed">
              {t('news.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map(({ dateKey, titleKey, excerptKey }, i) => (
            <NewsCard
              key={titleKey}
              date={t(dateKey)}
              title={t(titleKey)}
              excerpt={t(excerptKey)}
              image={NEWS_IMAGES[i]}
              index={i}
              readMore={t('news.readmore')}
            />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <button className="group flex items-center gap-3 px-8 py-3 border border-[#2C3340] font-body text-sm text-[#2C3340] hover:bg-[#2C3340] hover:text-[#F5F2ED] transition-all duration-300">
            {t('news.viewall')}
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function NewsCard({ date, title, excerpt, image, index, readMore }: {
  date: string;
  title: string;
  excerpt: string;
  image: string;
  index: number;
  readMore: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Meta */}
      <span className="font-body text-xs text-[#C4A882] tracking-wider mb-3 block">
        {date}
      </span>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-[#2C3340] mb-3 leading-snug group-hover:text-[#C4A882] transition-colors duration-200">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="font-body text-sm text-[#8A8A85] leading-relaxed mb-4 line-clamp-3">
        {excerpt}
      </p>

      {/* Read more */}
      <span className="flex items-center gap-2 font-body text-xs text-[#2C3340] group-hover:text-[#C4A882] transition-colors duration-200">
        {readMore}
        <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </motion.article>
  );
}
