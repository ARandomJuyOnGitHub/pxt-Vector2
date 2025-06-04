enum SpriteProperties {
    //% block="position"
    Position,
    //% block="velocity"
    Velocity,
    //% block="acceleration"
    Acceleration,
    //% block="friction"
    Friction,
    //% block="scale"
    Scale
}

enum AngleTypes {
    //% block="acute"
    Acute,
    //% block="obtuse"
    Obtuse
}

//% blockNamespace=vectors
class Vector2 {
    //% group="Properties"
    //% blockCombine
    x: number = 0;
    //% blockCombine
    y: number = 0;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

}


//% groups='["Create", "Properties", "Math", "Methods", "Sprite Related Methods", "Miscellaneous"]'
//% weight=50 icon="\uf30c"
namespace vectors {
    /**
     * Creates a new vector.
     */
    //% block="new vector2 || x$x y$y"
    //% blockSetVariable="vector2"
    //% expandableArgumentMode="toggle"
    //% x.defl=0
    //% y.defl=0
    //% weight=101
    //% group="Create"
    export function create(x?: number, y?: number) {
        return new Vector2(x, y)
    }

    /**
     * Creates a new vector.
     */
    //% block="new vector2 || x$x y$y"
    //% expandableArgumentMode="toggle"
    //% blockAliasFor="vectors.create"
    //% x.defl=0
    //% y.defl=0
    //% group="Create"
    export function __create(x?: number, y?: number): Vector2 {
        return create(x, y)
    }

    /**
     * Returns the magnitude of the inputted vector.
     */
    //% block="the magnitude of $vector2"
    //% vector2.shadow="variables_get" vector2.defl="vector2"
    //% weight=101
    //% group="Properties"
    export function magnitude(vector2: Vector2): number {
        return Math.sqrt(vector2.x ** 2 + vector2.y ** 2)
    }

    /**
     * Returns the normal of the inputted vector.
     */
    //% block="the normal of $vector2"
    //% vector2.shadow="variables_get" vector2.defl="vector2"
    //% weight=99
    //% group="Properties"
    export function normal(vector2: Vector2): Vector2 {
        let magnitude: number = vectors.magnitude(vector2)
        let resultx = vector2.x / magnitude
        let resulty = vector2.y / magnitude
        return new Vector2(resultx, resulty)
    }

    /**
         * Returns the value of the vector
         */
    //% block="the value of $vector2"
    //% vector2.shadow="variables_get" vector2.defl="vector2"
    //% group="Properties"
    export function getValue(vector2: Vector2): object {
        return { x: vector2.x, y: vector2.y }
    }

    /**
     * Returns the sum of the two vectors.
     * @param firstvector the first addend of the equation
     * @param secondvector the second addend of the equation
     */
    //% block="$firstvector + $secondvector"
    //% firstvector.shadow="variables_get" firstvector.defl="firstaddend"
    //% secondvector.shadow="variables_get" secondvector.defl="secondaddend"
    //% weight=106
    //% group="Math"
    export function add(firstvector: Vector2, secondvector: Vector2): Vector2 {
        let resultx = firstvector.x + secondvector.x
        let resulty = firstvector.y + secondvector.y
        return new Vector2(resultx, resulty)
    }

    /**
     * Returns the difference of the two vectors.
     * @param firstvector the minuend of the equation
     * @param secondvector the subtrahend of the equation
     */
    //% block="$firstvector - $secondvector"
    //% firstvector.shadow="variables_get" firstvector.defl="minuend"
    //% secondvector.shadow="variables_get" secondvector.defl="subtrahend"
    //% weight=104
    //% group="Math"
    export function subtract(firstvector: Vector2, secondvector: Vector2): Vector2 {
        let resultx = firstvector.x - secondvector.x
        let resulty = firstvector.y - secondvector.y
        return new Vector2(resultx, resulty)
    }

    /**
     * Returns the product/multiple of the two values. The second parameter can be a vector or a number.
     * @param vector2 the multiplicand of the equation
     * @param input the multiplier of the equation
     */
    //% block="$vector2 x $input"
    //% vector2.shadow="variables_get" vector2.defl="multiplicand"
    //% input.shadow="variables_get" input.defl="multiplier"
    //% weight=103
    //% group="Math"
    export function multiply(vector2: Vector2, input: Vector2 | number): Vector2 {
        if (typeof input != "number") {
            let resultx = vector2.x * input.x
            let resulty = vector2.y * input.y
            return new Vector2(resultx, resulty)
        } else {
            let resultx = vector2.x * input
            let resulty = vector2.y * input
            console.log(resultx)
            console.log(resulty)
            return new Vector2(resultx, resulty)
        }

    }

    /**
     * Returns the quotient of the two values. The second parameter can be a vector or a number.
     * @param vector2 the dividend of the equation
     * @param input the divisor of the equation
     */
    //% block="$vector2 / $input"
    //% vector2.shadow="variables_get" vector2.defl="dividend"
    //% input.shadow="variables_get" input.defl="divisor"
    //% weight=102
    //% group="Math"
    export function divide(vector2: Vector2, input: Vector2 | number): Vector2 {
        if (typeof input != "number") {
            let resultx = vector2.x / input.x
            let resulty = vector2.y / input.y
            return new Vector2(resultx, resulty)
        } else {
            let resultx = vector2.x / input
            let resulty = vector2.y / input
            return new Vector2(resultx, resulty)
        }
    }

    /**
     * Returns the dot product of the two vectors
     */
    //% block="the dot product of the vectors $firstVector and $secondVector"
    //% firstVector.shadow="variables_get" firstVector.defl="firstVector"
    //% secondVector.shadow="variables_get" secondVector.defl="secondVector"
    //% weight=100
    //% group="Methods"
    export function dot(firstVector: Vector2, secondVector: Vector2): number {
        return (firstVector.x * secondVector.x) + (firstVector.y * secondVector.y)
    }

    /**
     * Returns the normalized dot product of the two vectors
     */
    //% block="the normalized dot product of the vectors $firstVector and $secondVector"
    //% firstVector.shadow="variables_get" firstVector.defl="firstVector"
    //% secondVector.shadow="variables_get" secondVector.defl="secondVector"
    //% weight=99
    //% group="Methods"
    export function normalizedDot(firstVector: Vector2, secondVector: Vector2): number {
        return vectors.dot(vectors.normal(firstVector), vectors.normal(secondVector))
    }

    /**
     * Rotates the vector by the inputted number of degrees. Will rotate the vector clockwise if the number of degrees is positive, otherwise, will rotate the vector counterclockwise.
     */
    //% block="rotate $vector2 by $angle degrees"
    //% angle.min=-360 angle.max=360
    //% vector2.shadow="variables_get" vector2.defl="vector2"
    //% weight=98
    //% group="Methods"
    export function rotate(vector2: Vector2, angle: number) {
        switch (angle) {
            case 90:
                const newy = vector2.y * -1
                vector2.y = vector2.x
                vector2.x = newy
                break;
            case -90:
                const newx = vector2.x * -1
                vector2.x = vector2.y
                vector2.y = newx
                break;
            case 180:
            case -180:
                vectors.equateto(vector2, vectors.multiply(vector2, -1))
                break;
            case 360:
            case -360:
                console.log("do nothing")
                break;
            default: {
                let radians = __anglesToRadians(angle)
                let newx = (vector2.x * Math.cos(radians)) - (vector2.y * Math.sin(radians))
                let newy = (vector2.x * Math.sin(radians)) + (vector2.y * Math.cos(radians))
                vector2.x = newx
                vector2.y = newy
                break;
            }
        }
    }

    /**
     * Returns the angle between the two vectors.
     */
    //% block="the $angleType angle between $firstVector and $secondVector"
    //% firstVector.shadow="variables_get" firstVector.defl="firstVector"
    //% secondVector.shadow="variables_get" secondVector.defl="secondVector"
    //% weight=97
    //% group="Methods"
    export function angle(firstVector: Vector2, secondVector: Vector2, angleType?: AngleTypes): number {
        let choosenangletype
        if (angleType == undefined) {
            choosenangletype = AngleTypes.Acute
        } else {
            choosenangletype = angleType
        }

        let acuteangle = __radiansToAngles(Math.acos(vectors.dot(firstVector, secondVector) / (vectors.magnitude(firstVector) * vectors.magnitude(secondVector))))
        if (choosenangletype == AngleTypes.Acute) {
            return acuteangle
        } else {
            return 360 - acuteangle
        }
    }

    /**
     * Projects the first vector onto the second vector
     */
    //% block="the projection of $firstVector onto $secondVector"
    //% firstVector.shadow="variables_get" firstVector.defl="firstVector"
    //% secondVector.shadow="variables_get" secondVector.defl="secondVector"
    //% weight=96
    //% group="Methods"
    export function project(firstVector: Vector2, secondVector: Vector2) {
        return vectors.multiply(secondVector, (vectors.dot(firstVector, secondVector) / vectors.magnitude(secondVector) ** 2))
    }

    /**
     * Reflects the inputted vector across the unit vector
     */
    //% block="the reflection of $vector2 across $unitVector"
    //% vector2.shadow="variables_get" vector2.defl="vector2"
    //% unitVector.shadow="variables_get" unitVector.defl="unitVector"
    //% weight=95
    //% group="Methods"
    export function reflect(vector2: Vector2, unitVector: Vector2): Vector2 {
        const n = vectors.normal(unitVector)
        return vectors.subtract(vector2, vectors.multiply(n, 2 * vectors.dot(vector2, n)))
    }

    /**
     * the linear interpolation between the two vector2
     * @param p1 the starting point of the interpolation
     * @param p2 the end point of the interpolation
     * @param t the number that interpolates the two function. Called the alpha value when used for alpha blending
     */
    //% block="the linear interpolation of $p1 and $p2 with a interpolation value of $t"
    //% p1.shadow="variables_get" p1.defl="point1"
    //% p2.shadow="variables_get" p2.defl="point2"
    //% weight=94
    //% group="Methods"
    export function lerp(p1: Vector2, p2: Vector2, t: number): Vector2 {
        return vectors.create(
            p1.x + (p2.x - p1.x) * t,
            p1.y + (p2.y - p1.y) * t
        )
    }

    /**
     * the clamped linear interpolation between the two vector2. The interpolation value is clamped inbetween 0 and 1
     * @param p1 the starting point of the interpolation
     * @param p2 the end point of the interpolation
     * @param t the number that interpolates the two function. Called the alpha value when used for alpha blending
     */
    //% block="the linear interpolation of $p1 and $p2 with a interpolation value of $t"
    //% p1.shadow="variables_get" p1.defl="point1"
    //% p2.shadow="variables_get" p2.defl="point2"
    //% group="Methods"
    export function clampedLerp(p1: Vector2, p2: Vector2, t: number): Vector2 {
        t = Math.clamp(0, 1, t)
        return vectors.create(
            p1.x + (p2.x - p1.x) * t,
            p1.y + (p2.y - p1.y) * t
        )
    }

    /**
     * Sets the choosen property of the sprite to a vector
     */
    //% block="set the $property of $sprite to $vector2"
    //% sprite.shadow="variables_get" sprite.defl="Sprite"
    //% vector2.shadow="variables_get" vector2.defl="vector2"
    //% weight=51
    //% group="Sprite Related Methods"
    export function vectorToSpriteProperty(sprite: Sprite, property: SpriteProperties, vector2: Vector2): void {
        switch (property) {
            case SpriteProperties.Position:
                sprite.x = vector2.x
                sprite.y = vector2.y
                break;
            case SpriteProperties.Velocity:
                sprite.vx = vector2.x
                sprite.vy = vector2.y
                break;
            case SpriteProperties.Acceleration:
                sprite.ax = vector2.x
                sprite.ay = vector2.y
                break;
            case SpriteProperties.Friction:
                sprite.fx = vector2.x
                sprite.fy = vector2.y
                break;
            case SpriteProperties.Scale:
                sprite.sx = vector2.x
                sprite.sy = vector2.y
                break;
        }
    }

    /**
     * Returns the choosen property of the sprite as a vector.
     */
    //% block="the $property of $sprite as a vector"
    //% sprite.shadow="variables_get" sprite.defl="Sprite"
    //% group="Sprite Related Methods"
    export function spritePropertyToVector(sprite: Sprite, property: SpriteProperties): Vector2 {
        switch (property) {
            case SpriteProperties.Position:
                return vectors.create(sprite.x, sprite.y)
                break;
            case SpriteProperties.Velocity:
                return new Vector2(sprite.vx, sprite.vy)
                break;
            case SpriteProperties.Acceleration:
                return new Vector2(sprite.ax, sprite.ay)
                break;
            case SpriteProperties.Friction:
                return new Vector2(sprite.fx, sprite.fy)
                break;
            case SpriteProperties.Scale:
                return new Vector2(sprite.sx, sprite.sy)
                break;
        }
    }

    /**
     * Returns the distance in pixels between two vectors.
     */
    //% block="the distance between $firstVector and $secondVector"
    //% firstVector.shadow="variables_get" firstVector.defl="firstVector"
    //% secondVector.shadow="variables_get" secondVector.defl="secondVector"
    //% group="Miscellaneous"
    export function distance(firstVector: Vector2, secondVector: Vector2): number {
        return Math.sqrt((Math.abs(secondVector.x - firstVector.x)) ** 2 + (Math.abs(secondVector.y - firstVector.y)) ** 2)
    }

    /**
     * Returns true if both the x and y values of both vectors are equal to eachother. Otherwise, returns false.
     */
    //% block="$firstvector = $secondvector"
    //% firstvector.shadow="variables_get" firstvector.defl="firstVector"
    //% secondvector.shadow="variables_get" secondvector.defl="secondVector"
    //% group="Miscellaneous"
    export function isEqualto(firstvector: Vector2, secondvector: Vector2): boolean {
        if ((firstvector.x == secondvector.x) && (firstvector.y == secondvector.y)) {
            return true
        } else {
            return false
        }
    }

    /**
     * Assigns the value of the expression vector to the target vector.
     * @param firstvector The target of the operation. The vector that is being assigned to.
     * @param secondvector The expression of the operation. The vector who's value is being assigned.
     */
    //% block="set $firstvector equal to $secondvector"
    //% firstvector.shadow="variables_get" firstvector.defl="firstVector"
    //% secondvector.shadow="variables_get" secondvector.defl="secondVector"
    //% group="Miscellaneous"
    export function equateto(firstvector: Vector2, secondvector: Vector2): void {
        firstvector.x = secondvector.x
        firstvector.y = secondvector.y
    }



    function __anglesToRadians(angle: number) {
        return angle * Math.PI / 180;
    }

    function __radiansToAngles(radian: number) {
        return radian * 180 / Math.PI;
    }
}