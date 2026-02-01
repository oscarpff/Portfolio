import { useState } from "react";
import { LoreSection } from "@/data/travnikLore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChevronRight, Flame, Globe } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface LoreTabsProps {
  loreSections: LoreSection[];
}

const categoryColors = {
  war: "from-red-500/20 to-orange-500/20 border-red-500/50",
  world: "from-purple-500/20 to-pink-500/20 border-purple-500/50",
};

const categoryBadgeColors = {
  war: "bg-red-500/20 text-red-200 border-red-500/50",
  world: "bg-purple-500/20 text-purple-200 border-purple-500/50",
};

interface LoreCardInternalProps {
  lore: LoreSection;
}

function LoreCardInternal({ lore }: LoreCardInternalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className={`bg-gradient-to-br ${categoryColors[lore.category]} border-2 backdrop-blur-sm hover:scale-[1.01] transition-all duration-300 h-full flex flex-col`}
      >
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-4xl">{lore.icon}</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-white">{lore.title}</h3>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-sm text-white/80 mb-4 line-clamp-3 flex-1">
            {lore.summary}
          </p>
          <Button
            onClick={() => setIsOpen(true)}
            className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 group"
          >
            Read Full Lore
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border-2 border-white/20">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="text-5xl">{lore.icon}</div>
              <div>
                <DialogTitle className="text-2xl font-bold text-white">
                  {lore.title}
                </DialogTitle>
                <DialogDescription>
                  <span
                    className={`inline-block text-xs px-2 py-1 rounded border ${
                      categoryBadgeColors[lore.category]
                    } mt-1 uppercase tracking-wider`}
                  >
                    {lore.category}
                  </span>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ ...props }) => (
                  <h2
                    className="text-2xl font-bold text-white mt-6 mb-3"
                    {...props}
                  />
                ),
                h3: ({ ...props }) => (
                  <h3
                    className="text-xl font-bold text-white/90 mt-4 mb-2"
                    {...props}
                  />
                ),
                p: ({ ...props }) => (
                  <p className="text-white/80 mb-4 leading-relaxed" {...props} />
                ),
                ul: ({ ...props }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
                ),
                li: ({ ...props }) => (
                  <li className="text-white/80" {...props} />
                ),
                strong: ({ ...props }) => (
                  <strong className="text-white font-bold" {...props} />
                ),
              }}
            >
              {lore.fullContent}
            </ReactMarkdown>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function LoreTabs({ loreSections }: LoreTabsProps) {
  const warLore = loreSections.filter((lore) => lore.category === "war");
  const worldLore = loreSections.filter((lore) => lore.category === "world");

  return (
    <Tabs defaultValue="war" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="war" className="gap-2">
          <Flame className="w-4 h-4" />
          War & Conflict
        </TabsTrigger>
        <TabsTrigger value="world" className="gap-2">
          <Globe className="w-4 h-4" />
          World & Evolution
        </TabsTrigger>
      </TabsList>

      <TabsContent value="war" className="mt-0">
        <div className="grid gap-6 md:grid-cols-1">
          {warLore.map((lore) => (
            <LoreCardInternal key={lore.id} lore={lore} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="world" className="mt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {worldLore.map((lore) => (
            <LoreCardInternal key={lore.id} lore={lore} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
