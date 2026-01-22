const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Óscar Pérez Fernández | Narrative Designer Portfolio. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Crafted with passion for worldbuilding & storytelling
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
