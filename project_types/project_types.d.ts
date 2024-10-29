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
    }

    //COMPONENT PROPS TYPES
    interface ProjectSlideProps {
        projects: Array<ProjectDetails>
    }

    interface CarouselContainerProps {
        project: ProjectDetails
        key: number
    }
}

export {}