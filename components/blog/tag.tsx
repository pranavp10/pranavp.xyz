const Tag = ({ title }: { title: string }) => (
  <span className="bg-[#59C5DE]/10 dark:text-dark-white-300 dark:bg-[#59C5DE]/10 text-pretty font-mono px-1.5 py-[1px] rounded-lg border border-[#59C5DE]/70 dark:border-[#59C5DE]/40">
    {title}
  </span>
);

export default Tag;
