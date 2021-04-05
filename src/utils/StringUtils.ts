export function Uint8ArrayToHexString(uint8: ArrayBuffer) {
    return Buffer.from(uint8).toString('hex');
}