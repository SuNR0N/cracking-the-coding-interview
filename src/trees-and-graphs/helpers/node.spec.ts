import { Node } from './node';

describe('Node', () => {
    describe('constructor', () => {
        describe('given that only the value is provided', () => {
            let node: Node<number>;

            beforeEach(() => {
                node = new Node<number>(1);
            });

            it('should create a node with the given value', () => {
                expect(node.value).toBe(1);
            });

            it('should have no children by default', () => {
                expect(node.numberOfRealChildren()).toBe(0);
            });

            it('should be able to add any number of children nodes', () => {
                node.addChild(new Node(2));
                node.addChild(new Node(3));
                node.addChild(new Node(4));

                expect(node.numberOfRealChildren()).toBe(3);
            });
        });

        describe('given that both the value and the number of children nodes are provided', () => {
            let node: Node<number>;

            beforeEach(() => {
                node = new Node<number>(1, 2);
            });

            it('should create a node with the given value', () => {
                expect(node.value).toBe(1);
            });

            it('should have no children by default', () => {
                expect(node.numberOfRealChildren()).toBe(0);
            });

            it('should be able to add at least as many children nodes as the maximum', () => {
                node.addChild(new Node(2));
                node.addChild(new Node(3));

                expect(node.numberOfRealChildren()).toBe(2);
            });

            it('should not be able to add more children than the maximum', () => {
                node.addChild(new Node(2));
                node.addChild(new Node(3));

                expect(() => {
                    node.addChild(new Node(4));
                }).toThrow();
            });
        });
    });

    describe('isLeaf', () => {
        it('should return true if the node has no children', () => {
            const node = new Node<number>(1);

            expect(node.isLeaf()).toBe(true);
        });

        it('should return true if all children nodes of the given node are undefined', () => {
            const node = new Node<number>(1);
            node.addChild();
            node.addChild();

            expect(node.isLeaf()).toBe(true);
        });

        it('should return false if the node has at least one child', () => {
            const node = new Node<number>(1);
            node.addChild(new Node(2));

            expect(node.isLeaf()).toBe(false);
        });

        it('should return false if the node has at least one defined child', () => {
            const node = new Node<number>(1);
            node.addChild();
            node.addChild(new Node(2));

            expect(node.isLeaf()).toBe(false);
        });
    });

    describe('addChild', () => {
        it('should add a new child node if no maximum is defined', () => {
            const node = new Node<number>(1);
            node.addChild(new Node(2));

            expect(node.numberOfRealChildren()).toBe(1);
        });

        it('should add a new child node as undefined', () => {
            const node = new Node<number>(1);
            node.addChild();

            expect(node.numberOfRealChildren()).toBe(0);
        });

        it('should add a new child node if a maximum is defined but it is not yet exceeded', () => {
            const node = new Node<number>(1, 1);
            node.addChild(new Node(2));

            expect(node.numberOfRealChildren()).toBe(1);
        });

        it('should throw an error if a maximum is defined and by adding that node would exceed the treshold', () => {
            const node = new Node<number>(1, 1);
            node.addChild(new Node(2));

            expect(() => {
                node.addChild(new Node(3));
            }).toThrow('Maximum child count reached (1)');
        });
    });

    describe('getChild', () => {
        it('should return the child node with the given index if it exists', () => {
            const node = new Node<number>(1);
            const childNode = new Node(2);
            node.addChild(childNode);

            expect(node.getChild(0)).toBe(childNode);
        });

        it('should return the child node with the given index if it is undefined', () => {
            const node = new Node<number>(1);
            node.addChild(new Node(2));
            node.addChild();

            expect(node.getChild(1)).toBeUndefined();
        });
    });

    describe('setChild', () => {
        it('should set a child node with the given index if the current node has no children', () => {
            const node = new Node<number>(1);
            const childNode = new Node(2);
            node.setChild(0, childNode);

            expect(node.getChild(0)).toBe(childNode);
        });

        it('should set a child node with the given index if it undefined', () => {
            const node = new Node<number>(1);
            const childNode = new Node(3);
            node.addChild(new Node(2));
            node.addChild();
            node.setChild(1, childNode);

            expect(node.getChild(1)).toBe(childNode);
            expect(node.children).toHaveLength(2);
        });

        it('should replace a child node with the given index if it exists', () => {
            const node = new Node<number>(1);
            const childNode = new Node(3);
            node.addChild(new Node(2));
            node.addChild();
            node.setChild(0, childNode);

            expect(node.getChild(0)).toBe(childNode);
            expect(node.children).toHaveLength(2);
        });
    });

    describe('numberOfChildren', () => {
        it('should return 0 if the node has no children', () => {
            const node = new Node<number>(1);

            expect(node.numberOfRealChildren()).toBe(0);
        });

        it('should return 0 if all children nodes of the given node are undefined', () => {
            const node = new Node<number>(1);
            node.addChild();
            node.addChild();

            expect(node.numberOfRealChildren()).toBe(0);
        });

        it('should return the number of children nodes if they exist', () => {
            const node = new Node<number>(1);
            node.addChild(new Node(2));
            node.addChild(new Node(3));
            node.addChild(new Node(4));

            expect(node.numberOfRealChildren()).toBe(3);
        });

        it('should return the number of defined children nodes', () => {
            const node = new Node<number>(1);
            node.addChild(new Node(2));
            node.addChild();
            node.addChild(new Node(3));
            node.addChild();
            node.addChild(new Node(4));

            expect(node.numberOfRealChildren()).toBe(3);
        });
    });

    describe('toString', () => {
        it('should stringify the node', () => {
            const node = new Node(3);
            node.addChild(new Node(1));

            expect(node.toString()).toEqual('{ value: 3, children: [{ value: 1, children: [] }] }');
        });
    });
});
