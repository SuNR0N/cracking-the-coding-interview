import { Node } from './helpers/node';

export interface IDependency<T> {
    project: Node<T>;
    dependsOn: Node<T>;
}

/** Returns a valid build order for projects if it exists */
export function buildOrder<T>(projects: Array<Node<T>>, dependencies: Array<IDependency<T>>): T[] {
    const orderedProjects: T[] = [];
    if (dependencies.length === 0) {
        return projects.map((project) => project.value);
    }
    dependencies.forEach((dependency) => {
        const dependentProjectIndex =  projects.findIndex((project) => project === dependency.dependsOn);
        if (dependentProjectIndex > -1) {
            projects.splice(dependentProjectIndex, 1);
        }
        dependency.project.addChild(dependency.dependsOn);
    });
    while (projects.length > 0) {
        const project = projects.pop() as Node<T>;
        orderedProjects.push(project.value);
        const dependenciesOfProject: Array<Node<T>> = dependencies
            .filter((dependency) => dependency.project === project)
            .map((dependency) => dependency.dependsOn);
        dependenciesOfProject.forEach((dependentProject) => {
            const indexOfDependency = dependencies
                .findIndex((dependency) => {
                    return dependency.project === project && dependency.dependsOn === dependentProject;
                });
            dependencies.splice(indexOfDependency, 1);
            const projectsDependOnDependentProject = dependencies
                .filter((dependency) => {
                    return dependency.dependsOn === dependentProject;
                });
            if (projectsDependOnDependentProject.length === 0) {
                projects.push(dependentProject);
            }
        });

    }
    if (dependencies.length > 0) {
        throw new Error('No valid build order exists for projects');
    } else {
        return orderedProjects;
    }
}
