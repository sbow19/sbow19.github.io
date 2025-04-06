declare global {
    type YAMLContent = {
        root: {
            projects: Array<ProjectDetails>
        }
    }

    type SlideContent = {
        title: string
        text: string | JSX.Element

        /**
         * URL for image or video
         */
        content: string
        contentSrc: string
        contentTag: string

    }

    type ProjectDetails = {
        name: string
        technologies: Array<string>
        slides: Array<SlideContent>
        links: {
            github: string
            portfolio_page?: string
        }
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