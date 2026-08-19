import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'lemon drop',
    category: 'brand identity & positioning',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=675&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=450&fit=crop&q=80',
    ],
  },
  {
    id: 2,
    title: 'brew can co.',
    category: 'packaging design',
    images: [
      'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=1200&h=675&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=450&fit=crop&q=80',
    ],
  },
  {
    id: 3,
    title: 'artistry studio',
    category: 'visual identity & web design',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=675&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=450&fit=crop&q=80',
    ],
  },
  {
    id: 4,
    title: 'golden hour',
    category: 'brand strategy & design',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=675&fit=crop&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=600&h=450&fit=crop&q=80',
    ],
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="work-section">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
