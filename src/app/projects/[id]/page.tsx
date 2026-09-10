import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ProjectClient from './ProjectClient';
import { projectsData } from '@/data/projectsData';

export function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[id];
  
  if (!project) {
    notFound();
  }

  const screenshotsDir = path.join(process.cwd(), 'public', 'projects', id);
  let screenshots: string[] = [];
  
  if (fs.existsSync(screenshotsDir)) {
    screenshots = fs.readdirSync(screenshotsDir).map(file => `/portofolio/projects/${id}/${file}`);
  }

  return <ProjectClient project={project} screenshots={screenshots} />;
}
