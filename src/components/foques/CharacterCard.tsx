import { Badge } from "@/components/ui/badge";

export interface QuestCharacter {
  name: string;
  species: string;
  role: string;
  imageUrl: string;
  appearance: string;
  personality: string;
  narrativeRole: string;
}

interface CharacterCardProps {
  character: QuestCharacter;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="bg-muted/20 border border-border/50 rounded-lg p-6 space-y-4">
      {/* Character Image */}
      <div className="aspect-square w-full bg-muted/30 rounded-md overflow-hidden border border-border/30">
        <img
          src={character.imageUrl}
          alt={character.name}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4=';
          }}
        />
      </div>
      
      {/* Character Info */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <h5 className="font-display text-lg font-bold text-gold">{character.name}</h5>
          <Badge variant="outline" className="border-gold/30 text-gold text-xs">
            {character.species.split('(')[0].trim()}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground italic mb-3">{character.role}</p>
        
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-semibold text-foreground">Appearance:</span>
            <p className="text-muted-foreground mt-1 leading-relaxed">{character.appearance}</p>
          </div>
          <div>
            <span className="font-semibold text-foreground">Personality:</span>
            <p className="text-muted-foreground mt-1 leading-relaxed">{character.personality}</p>
          </div>
          <div>
            <span className="font-semibold text-foreground">Narrative Role:</span>
            <p className="text-muted-foreground mt-1 leading-relaxed">{character.narrativeRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
