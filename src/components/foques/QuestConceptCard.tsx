interface QuestConceptCardProps {
  title: string;
  theme: string;
  synopsis: string;
}

const QuestConceptCard = ({ title, theme, synopsis }: QuestConceptCardProps) => {
  return (
    <div className="card-elevated border-gradient-gold rounded-lg p-6 hover:scale-[1.02] transition-transform">
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-xs text-gold italic font-body mb-3">"{theme}"</p>
      <p className="text-sm text-muted-foreground font-body leading-relaxed">
        {synopsis}
      </p>
    </div>
  );
};

export default QuestConceptCard;
