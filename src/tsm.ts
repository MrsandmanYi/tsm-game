/*
 * Copyright (c) 2012, 2018 Matthias Ferch
 *
 * Project homepage: https://github.com/matthiasferch/tsm
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */

import mat2 from './mat2'
import mat3 from './mat3'
import mat4 from './mat4'
import quat from './quat'
import vec2 from './vec2'
import vec3 from './vec3'
import vec4 from './vec4'

export const Matrix2x2 = mat2
export type Matrix2x2 = mat2

export const Matrix3x3 = mat3
export type Matrix3x3 = mat3

export const Matrix4x4 = mat4
export type Matrix4x4 = mat4

export const Quaternion = quat
export type Quaternion = quat

export const Vector2 = vec2
export type Vector2 = vec2

export const Vector3 = vec3
export type Vector3 = vec3

export const Vector4 = vec4
export type Vector4 = vec4

export default {
    vec2, vec3, vec4,
    mat2, mat3, mat4,
    quat,
}
