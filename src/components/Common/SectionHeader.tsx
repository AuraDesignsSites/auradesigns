interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, description, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      {subtitle && (
        <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-muted-foreground ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;