document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("calculateButton").addEventListener("click", function () {
		console.log("Tombol diklik")

		// Ambil nilai input dan konversi ke angka
		const pack = parseFloat(document.getElementById("pack").value.replace(",", "."))
		const hargapack = parseFloat(document.getElementById("hargapack").value.replace(",", "."))
		const anes = parseFloat(document.getElementById("anes").value.replace(",", "."))
		const antibio = parseFloat(document.getElementById("antibio").value.replace(",", "."))
		const antis = parseFloat(document.getElementById("antis").value.replace(",", "."))
		const clamp = parseFloat(document.getElementById("clamp").value.replace(",", "."))
		const defi = parseFloat(document.getElementById("defi").value.replace(",", "."))
		const lab = parseFloat(document.getElementById("lab").value.replace(",", "."))
		const pins = parseFloat(document.getElementById("pins").value.replace(",", "."))
		const scalpel = parseFloat(document.getElementById("scalpel").value.replace(",", "."))
		const splint = parseFloat(document.getElementById("splint").value.replace(",", "."))
		const sponge = parseFloat(document.getElementById("sponge").value.replace(",", "."))
		const transfusion = parseFloat(document.getElementById("transfusion").value.replace(",", "."))
		const ultra = parseFloat(document.getElementById("ultra").value.replace(",", "."))
		const surge = parseFloat(document.getElementById("surge").value.replace(",", "."))
		const stit = parseFloat(document.getElementById("stit").value.replace(",", "."))

		if (
			isNaN(pack) ||
			isNaN(hargapack) ||
			isNaN(anes) ||
			isNaN(antibio) ||
			isNaN(antis) ||
			isNaN(clamp) ||
			isNaN(defi) ||
			isNaN(lab) ||
			isNaN(pins) ||
			isNaN(scalpel) ||
			isNaN(splint) ||
			isNaN(sponge) ||
			isNaN(transfusion) ||
			isNaN(ultra) ||
			isNaN(surge) ||
			isNaN(stit)
		) {
			alert("Masukkan semua nilai dengan benar.")
			return
		}

		// Fungsi untuk menghitung pembagian dengan sisa
		function calculateDivisionWithRemainder(total, value) {
			const quotient = Math.floor(total / value)
			const remainder = total % value

			console.log(`Calculating for total: ${total}, value: ${value}`)
			console.log(`Quotient: ${quotient}, Remainder: ${remainder}`)

			return { quotient, remainder }
		}

		function formatNumber(num) {
			return Number.isInteger(num) ? num : num.toFixed(2)
		}

		const calculations = [
			{ name: "surge", total: pack * 5, value: surge },
			{ name: "anes", total: pack * 20, value: anes },
			{ name: "antibio", total: pack * 20, value: antibio },
			{ name: "antis", total: pack * 20, value: antis },
			{ name: "clamp", total: pack * 20, value: clamp },
			{ name: "defi", total: pack * 20, value: defi },
			{ name: "lab", total: pack * 20, value: lab },
			{ name: "pins", total: pack * 20, value: pins },
			{ name: "scalpel", total: pack * 20, value: scalpel },
			{ name: "splint", total: pack * 20, value: splint },
			{ name: "sponge", total: pack * 20, value: sponge },
			{ name: "transfusion", total: pack * 20, value: transfusion },
			{ name: "ultra", total: pack * 20, value: ultra },
			{ name: "stit", total: pack * 20, value: stit },
		]

		let totalProfit = 0

		calculations.forEach((calc) => {
			const { quotient, remainder } = calculateDivisionWithRemainder(calc.total, calc.value)

			// Update elemen berdasarkan id yang sesuai
			const element = document.getElementById(`sisa-${calc.name}`)
			if (element) {
				element.textContent = formatNumber(remainder) // Tampilkan sisa
			}

			totalProfit += quotient
		})

		const modal = hargapack * pack
		let ProfitBersih = totalProfit - modal

		console.log("totalProfit:", totalProfit)
		console.log("modal:", modal)

		const profitElement = document.getElementById("profit")
		let Profit_Bersih = document.getElementById("profit-bersih")
		const modalElement = document.getElementById("modal")

		profitElement.innerHTML = `Profit Kotor: ${formatNumber(
			totalProfit,
		)} <img src="images/Wl.png" width="16px" height="auto" alt="" style="position:relative;top:1px;">`
		modalElement.innerHTML = `Modal: ${formatNumber(
			modal,
		)} <img src="images/Wl.png" width="16px" height="auto" alt="" style="position:relative;top:1px;">`
		Profit_Bersih.innerHTML = `Profit Bersih: ${formatNumber(
			ProfitBersih,
		)} <img src="images/Wl.png" width="16px" height="auto" alt="" style="position:relative;top:1px;">`
	})
})

gsap.config({
	autoSleep: 0, // Disable auto sleep to keep animations active
})

const commonScrollTrigger = {
	scrub: 1,
}

gsap.matchMedia().add("(max-width: 768px)", () => {
	// Animasi untuk mobile
	gsap.fromTo(
		"#Gedung1",
		{ scale: 1, y: 0, x: 0 },
		{ scale: 1.1, y: 400, x: -100, scrollTrigger: commonScrollTrigger },
	)

	gsap.fromTo(
		"#Gedung2",
		{ scale: 1, y: 0, x: 0 },
		{ scale: 1.1, y: 200, x: 100, scrollTrigger: commonScrollTrigger },
	)

	gsap.fromTo(
		"#Kota1",
		{ scale: 1, y: 0 },
		{ scale: 1.1, y: 1000, scrollTrigger: commonScrollTrigger },
	)

	gsap.fromTo(
		"#Kota2",
		{ scale: 1, y: 0 },
		{ scale: 1.1, y: 1000, scrollTrigger: commonScrollTrigger },
	)

	gsap.fromTo("#Sun", { x: 0 }, { x: 500, scrollTrigger: commonScrollTrigger })

	gsap.fromTo(
		"#Title",
		{ scale: 1, y: 0 },
		{ scale: 4, y: -100, scrollTrigger: commonScrollTrigger },
	)
})

gsap.matchMedia().add("(min-width: 769px)", () => {
	// Animasi untuk desktop
	gsap.fromTo(
		"#Gedung1",
		{ scale: 1, y: 0, x: 0 },
		{ scale: 1.3, y: 200, x: -50, scrollTrigger: commonScrollTrigger },
	)

	gsap.fromTo(
		"#Gedung2",
		{ scale: 1, y: 0, x: 0 },
		{ scale: 1.2, y: 200, x: 50, scrollTrigger: commonScrollTrigger },
	)

	gsap.fromTo(
		"#Kota1",
		{ scale: 1, y: 0 },
		{ scale: 1.2, y: 100, scrollTrigger: commonScrollTrigger },
	)

	gsap.fromTo(
		"#Kota2",
		{ scale: 1, y: 0 },
		{ scale: 1.2, y: 200, scrollTrigger: commonScrollTrigger },
	)

	gsap.fromTo("#Sun", { x: 0 }, { x: 200, scrollTrigger: commonScrollTrigger })

	gsap.fromTo(
		"#Title",
		{ scale: 1, y: 0 },
		{ scale: 2, y: -200, scrollTrigger: commonScrollTrigger },
	)
})

AOS.init({disable: 'mobile'});
