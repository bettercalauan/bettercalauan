'use client'

import { infrastructureProjects } from '@/data/budget'
import InfrastructureProject from './InfrastructureProject'

export default function InfrastructureProjectList() {
  return (
    <>
      {infrastructureProjects.map((project, index) => (
        <InfrastructureProject
          key={`project-${index}`}
          {...project}
        />
      ))}
    </>
  )
}
