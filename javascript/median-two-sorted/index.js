const findMedianSortedArrays = (nums1, nums2) => {
  // gabungin array 1 dan array 2
  const combineTwoArrays = nums1.concat(nums2)
  // sorting array yang sudah digabunng
  combineTwoArrays.sort()
  // cek apakah jumlah array genap/ganjil
  if (combineTwoArrays % 2 === 1) {
    // kembalikan array indeks tengah
    return combineTwoArrays[combineTwoArrays.length / 2]
  }
  // kembalikan array indeks tengah + array indeks tengah dikurangi 1
  return (combineTwoArrays[combineTwoArrays.length / 2] + combineTwoArrays[combineTwoArrays.length / 2 - 1]) / 2
}

console.log(findMedianSortedArrays([1,2,2,3,1], [4,3,2,2,1]))