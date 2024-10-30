declare global {
    type YAMLContent = {
        root: {
            projects: Array<ProjectDetails>
        }
    }

    type ProjectDetails = {
        name: string
        description: string
        technologies: Array<string>
        links: {
            github: string
            portfolio_page?: string
        }
        icons: Array<string>
        id: string
        overview: string
        features: Array<string>
        full_technologies: Array<string>
        challenges: Array<string>
        future: Array<string>
        code: string
    }

    //COMPONENT PROPS TYPES
    interface ProjectSlideProps {
        projects: Array<ProjectDetails>
    }

    interface CarouselContainerProps {
        project: ProjectDetails
        key: number
    }

    interface ContentContainerProps {
        children: ReactNode
        classNames: Array<string>
        element: string
    }

    interface ProjectDetailsDropdownProps {
        projects: Array<ProjectDetails>
        onSelect: (e: ChangeEvent<HTMLSelectElement>)=>void
    }

}

export {}