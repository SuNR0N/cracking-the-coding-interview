import { buildOrder, IDependency } from './build-order';
import { Node } from './helpers/node';

describe('buildOrder', () => {
    it('should return an empty list without projects', () => {
        const projects: Array<Node<string>> = [];
        const dependencies: Array<IDependency<string>> = [];
        const expectedProjectsListLength = 0;

        expect(buildOrder(projects, dependencies)).toHaveLength(expectedProjectsListLength);
    });

    it('should return the list of projects without dependencies', () => {
        const projects: Array<Node<string>> = [
            new Node('a'),
            new Node('b'),
            new Node('c'),
            new Node('d'),
            new Node('e'),
            new Node('f'),
        ];
        const dependencies: Array<IDependency<string>> = [];
        const expectedOrderedProjectsList: string[] = [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
        ];

        expect(buildOrder(projects, dependencies)).toEqual(expectedOrderedProjectsList);
    });

    it('should throw an error if no valid build order exists', () => {
        const projectA = new Node('a');
        const projectB = new Node('b');
        const projectC = new Node('c');
        const projectD = new Node('d');
        const projectE = new Node('e');
        const projectF = new Node('f');
        const projects: Array<Node<string>> = [
            projectA,
            projectB,
            projectC,
            projectD,
            projectE,
            projectF,
        ];
        const dependencies: Array<IDependency<string>> = [
            {
                dependsOn: projectB,
                project: projectA,
            },
            {
                dependsOn: projectC,
                project: projectB,
            },
            {
                dependsOn: projectA,
                project: projectC,
            },
        ];

        expect(() => {
            buildOrder(projects, dependencies);
        }).toThrow('No valid build order exists for projects');
    });

    it('should return the list of projects in a possible build order if it exists', () => {
        const projectA = new Node('a');
        const projectB = new Node('b');
        const projectC = new Node('c');
        const projectD = new Node('d');
        const projectE = new Node('e');
        const projectF = new Node('f');
        const projects: Array<Node<string>> = [
            projectA,
            projectB,
            projectC,
            projectD,
            projectE,
            projectF,
        ];
        const dependencies: Array<IDependency<string>> = [
            {
                dependsOn: projectD,
                project: projectA,
            },
            {
                dependsOn: projectB,
                project: projectF,
            },
            {
                dependsOn: projectD,
                project: projectB,
            },
            {
                dependsOn: projectA,
                project: projectF,
            },
            {
                dependsOn: projectC,
                project: projectD,
            },
        ];
        const expectedUnorderedProjectsList: string[] = [
            'f',
            'e',
            'a',
            'b',
            'd',
            'c',
        ];

        expect(buildOrder(projects, dependencies))
            .toEqual(expect.arrayContaining(expectedUnorderedProjectsList));
    });
});
