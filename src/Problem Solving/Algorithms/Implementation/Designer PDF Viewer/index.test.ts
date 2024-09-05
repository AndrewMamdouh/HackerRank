import { designerPdfViewer } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Designer PDF Viewer', () => {
    it('should return the size of the highlighted area', () => {
        expect(
            designerPdfViewer(
                [
                    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                    5, 5, 5, 5, 5, 5,
                ],
                'abc'
            )
        ).toBe(9);
    });
});
