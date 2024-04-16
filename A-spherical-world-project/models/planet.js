
const planet_vertices = [
   0.0,  0.0, 1.0,
   0.0,  0.0,  -1.0,
   0.0,  1.0, 0.0,
   0.0,  -1.0, 0.0,
   1.0,  0.0,  0.0,
   -1.0,  0.0,  0.0
]

const planet_trianglesIndexed = [
  0, 2, 4,
  0, 2, 5,
  0, 3, 4,
  0, 3, 5,
  1, 2, 4,
  1, 2, 5,
  1, 3, 4,
  1, 3, 5,
]

const pv_1 = [0.0, 0.0, 0.1, 0.0, 0.1, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, -0.1, 0.0, -0.1, 0.0, -0.1, 0.0, 0.0, 0.0, 0.07071067811865475, 0.07071067811865475, 0.07071067811865475, 0.07071067811865475, 0.0, 0.07071067811865475, 0.0, 0.07071067811865475, 0.07071067811865475, 0.0, -0.07071067811865475, 0.0, 0.07071067811865475, -0.07071067811865475, 0.07071067811865475, -0.07071067811865475, 0.0, 0.0, -0.07071067811865475, 0.07071067811865475, -0.07071067811865475, 0.0, 0.07071067811865475, -0.07071067811865475, 0.07071067811865475, 0.0, -0.07071067811865475, 0.0, -0.07071067811865475, -0.07071067811865475, -0.07071067811865475, 0.0, 0.0, -0.07071067811865475, -0.07071067811865475]
const pti_1 = [6, 7, 8, 0, 6, 8, 1, 7, 6, 2, 8, 7, 9, 7, 10, 3, 9, 10, 2, 7, 9, 1, 10, 7, 11, 12, 8, 2, 11, 8, 4, 12, 11, 0, 8, 12, 6, 13, 14, 1, 6, 14, 0, 13, 6, 5, 14, 13, 14, 15, 10, 1, 14, 10, 5, 15, 14, 3, 10, 15, 16, 13, 12, 4, 16, 12, 5, 13, 16, 0, 12, 13, 16, 17, 15, 5, 16, 15, 4, 17, 16, 3, 15, 17, 9, 17, 11, 2, 9, 11, 3, 17, 9, 4, 11, 17]

const pv_r1_s1 = [0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.7071067811865475, 0.7071067811865475, 0.7071067811865475, 0.7071067811865475, 0.0, 0.7071067811865475, 0.0, 0.7071067811865475, 0.7071067811865475, 0.0, -0.7071067811865475, 0.0, 0.7071067811865475, -0.7071067811865475, 0.7071067811865475, -0.7071067811865475, 0.0, 0.0, -0.7071067811865475, 0.7071067811865475, -0.7071067811865475, 0.0, 0.7071067811865475, -0.7071067811865475, 0.7071067811865475, 0.0, -0.7071067811865475, 0.0, -0.7071067811865475, -0.7071067811865475, -0.7071067811865475, 0.0, 0.0, -0.7071067811865475, -0.7071067811865475]
const pti_s1 = [6, 7, 8, 0, 6, 8, 1, 7, 6, 2, 8, 7, 9, 7, 10, 3, 9, 10, 2, 7, 9, 1, 10, 7, 11, 12, 8, 2, 11, 8, 4, 12, 11, 0, 8, 12, 6, 13, 14, 1, 6, 14, 0, 13, 6, 5, 14, 13, 14, 15, 10, 1, 14, 10, 5, 15, 14, 3, 10, 15, 16, 13, 12, 4, 16, 12, 5, 13, 16, 0, 12, 13, 16, 17, 15, 5, 16, 15, 4, 17, 16, 3, 15, 17, 9, 17, 11, 2, 9, 11, 3, 17, 9, 4, 11, 17]

const pv_r1_s2 = [0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.7071067811865475, 0.7071067811865475, 0.7071067811865475, 0.7071067811865475, 0.0, 0.7071067811865475, 0.0, 0.7071067811865475, 0.7071067811865475, 0.0, -0.7071067811865475, 0.0, 0.7071067811865475, -0.7071067811865475, 0.7071067811865475, -0.7071067811865475, 0.0, 0.0, -0.7071067811865475, 0.7071067811865475, -0.7071067811865475, 0.0, 0.7071067811865475, -0.7071067811865475, 0.7071067811865475, 0.0, -0.7071067811865475, 0.0, -0.7071067811865475, -0.7071067811865475, -0.7071067811865475, 0.0, 0.0, -0.7071067811865475, -0.7071067811865475, 0.408248290463863, 0.816496580927726, 0.408248290463863, 0.816496580927726, 0.408248290463863, 0.408248290463863, 0.408248290463863, 0.408248290463863, 0.816496580927726, 0.0, 0.3826834323650898, 0.9238795325112867, 0.3826834323650898, 0.0, 0.9238795325112867, 0.3826834323650898, 0.9238795325112867, 0.0, 0.0, 0.9238795325112867, 0.3826834323650898, 0.9238795325112867, 0.0, 0.3826834323650898, 0.9238795325112867, 0.3826834323650898, 0.0, 0.816496580927726, 0.408248290463863, -0.408248290463863, 0.408248290463863, 0.816496580927726, -0.408248290463863, 0.408248290463863, 0.408248290463863, -0.816496580927726, 0.3826834323650898, 0.0, -0.9238795325112867, 0.0, 0.3826834323650898, -0.9238795325112867, 0.9238795325112867, 0.0, -0.3826834323650898, 0.0, 0.9238795325112867, -0.3826834323650898, 0.408248290463863, -0.816496580927726, 0.408248290463863, 0.408248290463863, -0.408248290463863, 0.816496580927726, 0.816496580927726, -0.408248290463863, 0.408248290463863, 0.9238795325112867, -0.3826834323650898, 0.0, 0.0, -0.9238795325112867, 0.3826834323650898, 0.3826834323650898, -0.9238795325112867, 0.0, 0.0, -0.3826834323650898, 0.9238795325112867, -0.408248290463863, 0.408248290463863, 0.816496580927726, -0.816496580927726, 0.408248290463863, 0.408248290463863, -0.408248290463863, 0.816496580927726, 0.408248290463863, -0.3826834323650898, 0.9238795325112867, 0.0, -0.3826834323650898, 0.0, 0.9238795325112867, -0.9238795325112867, 0.3826834323650898, 0.0, -0.9238795325112867, 0.0, 0.3826834323650898, -0.816496580927726, 0.408248290463863, -0.408248290463863, -0.408248290463863, 0.408248290463863, -0.816496580927726, -0.408248290463863, 0.816496580927726, -0.408248290463863, -0.9238795325112867, 0.0, -0.3826834323650898, -0.3826834323650898, 0.0, -0.9238795325112867, -0.816496580927726, -0.408248290463863, 0.408248290463863, -0.408248290463863, -0.408248290463863, 0.816496580927726, -0.408248290463863, -0.816496580927726, 0.408248290463863, -0.3826834323650898, -0.9238795325112867, 0.0, -0.9238795325112867, -0.3826834323650898, 0.0, -0.408248290463863, -0.816496580927726, -0.408248290463863, -0.408248290463863, -0.408248290463863, -0.816496580927726, -0.816496580927726, -0.408248290463863, -0.408248290463863, 0.0, -0.9238795325112867, -0.3826834323650898, 0.0, -0.3826834323650898, -0.9238795325112867, 0.408248290463863, -0.408248290463863, -0.816496580927726, 0.408248290463863, -0.816496580927726, -0.408248290463863, 0.816496580927726, -0.408248290463863, -0.408248290463863]
const pti_s2 = [18, 19, 20, 6, 18, 20, 7, 19, 18, 8, 20, 19, 21, 20, 22, 0, 21, 22, 6, 20, 21, 8, 22, 20, 23, 18, 24, 1, 23, 24, 7, 18, 23, 6, 24, 18, 25, 19, 26, 2, 25, 26, 8, 19, 25, 7, 26, 19, 27, 28, 29, 9, 27, 29, 7, 28, 27, 10, 29, 28, 30, 29, 31, 3, 30, 31, 9, 29, 30, 10, 31, 29, 26, 27, 32, 2, 26, 32, 7, 27, 26, 9, 32, 27, 33, 28, 23, 1, 33, 23, 10, 28, 33, 7, 23, 28, 34, 35, 36, 11, 34, 36, 12, 35, 34, 8, 36, 35, 37, 36, 25, 2, 37, 25, 11, 36, 37, 8, 25, 36, 38, 34, 39, 4, 38, 39, 12, 34, 38, 11, 39, 34, 22, 35, 40, 0, 22, 40, 8, 35, 22, 12, 40, 35, 41, 42, 43, 6, 41, 43, 13, 42, 41, 14, 43, 42, 24, 43, 44, 1, 24, 44, 6, 43, 24, 14, 44, 43, 45, 41, 21, 0, 45, 21, 13, 41, 45, 6, 21, 41, 46, 42, 47, 5, 46, 47, 14, 42, 46, 13, 47, 42, 48, 49, 50, 14, 48, 50, 15, 49, 48, 10, 50, 49, 44, 50, 33, 1, 44, 33, 14, 50, 44, 10, 33, 50, 51, 48, 46, 5, 51, 46, 15, 48, 51, 14, 46, 48, 31, 49, 52, 3, 31, 52, 10, 49, 31, 15, 52, 49, 53, 54, 55, 16, 53, 55, 13, 54, 53, 12, 55, 54, 56, 55, 38, 4, 56, 38, 16, 55, 56, 12, 38, 55, 47, 53, 57, 5, 47, 57, 13, 53, 47, 16, 57, 53, 40, 54, 45, 0, 40, 45, 12, 54, 40, 13, 45, 54, 58, 59, 60, 16, 58, 60, 17, 59, 58, 15, 60, 59, 57, 60, 51, 5, 57, 51, 16, 60, 57, 15, 51, 60, 61, 58, 56, 4, 61, 56, 17, 58, 61, 16, 56, 58, 52, 59, 62, 3, 52, 62, 15, 59, 52, 17, 62, 59, 63, 64, 65, 9, 63, 65, 17, 64, 63, 11, 65, 64, 32, 65, 37, 2, 32, 37, 9, 65, 32, 11, 37, 65, 62, 63, 30, 3, 62, 30, 17, 63, 62, 9, 30, 63, 39, 64, 61, 4, 39, 61, 11, 64, 39, 17, 61, 64]

const Model_planet = { vertices: pv_r1_s2, trianglesIndexed: pti_s2};

export default Model_planet;