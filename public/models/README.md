# 3D Models Directory

Letakkan file Blender `.glb` Anda di sini.

## Cara export dari Blender ke .glb:

1. Buka objek di Blender
2. `File` → `Export` → `glTF 2.0 (.glb/.gltf)`
3. Pilih format: **glTF Binary (.glb)**
4. Klik **Export glTF 2.0**
5. Simpan file di folder ini

## Kemudian update `portfolioData.js`:

```js
export const models3D = [
  {
    id: 1,
    name: "Nama Objek",
    description: "Deskripsi singkat",
    file: "/models/nama_file.glb",  // ← sesuaikan nama file
    thumbnail: null,
  },
  // ...
];
```
