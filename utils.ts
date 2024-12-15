/**
 * 生成指定长度的随机数字
 * @param length - 要生成的数字长度
 * @returns 返回一个长度为指定值的随机数字（作为字符串）
 */
export function generateRandomNumber(length: number): string {
    if (length <= 0) {
        throw new Error("Length must be greater than 0");
    }

    // 用 Math.random() 生成 [0, 1) 范围的随机数，然后通过字符串操作确保长度
    const min = Math.pow(10, length - 1); // 最小值，例如长度为3 -> 100
    const max = Math.pow(10, length) - 1; // 最大值，例如长度为3 -> 999
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber.toString(); // 返回字符串形式的数字
}
