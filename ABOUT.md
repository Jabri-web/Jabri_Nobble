<!-- ===== Language Switch Bar (English Active) ===== -->
<div align="center" style="margin: 10px 0 20px 0; padding: 8px; background: #161b22; border-radius: 30px; display: inline-block; width: auto; border: 1px solid #30363d;">
    <a href="./ABOUT.md" style="background: #6ae3ff; color: #0a0a0f; padding: 6px 22px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 14px; margin: 0 5px; display: inline-block;">
        🇬🇧 English (Default)
    </a>
    <a href="./ABOUT-AR.md" style="background: transparent; color: #c9d1d9; padding: 6px 22px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 14px; margin: 0 5px; display: inline-block; border: 1px solid #30363d;">
        🇾🇪 العربية
    </a>
</div>

---

# 📌 Repository Identity Card

| Field | Details |
| :--- | :--- |
| **Repository Name** | `Jabri_Nobble` |
| **GitHub Repo** | [https://github.com/Jabri-web/Jabri_Nobble](https://github.com/Jabri-web/Jabri_Nobble) |
| **GitHub Pages** | [https://jabri-web.github.io/Jabri_Nobble/](https://jabri-web.github.io/Jabri_Nobble/) |
| **Current File** | `./ABOUT.md` (English) |
| **Language** | English (Default) / العربية (Alternative) |
| **DOI** | [10.5281/zenodo.20148770](https://doi.org/10.5281/zenodo.20148770) |
| **Author** | [Eng. Abdulla Mohammed Nasser Al-Jabri](https://github.com/Jabri-web) |
| **License** | Code: MIT / Data & Docs: CC BY 4.0 |
| **Identity** | `Z + C + A = 1` |

---

# 🔬 Jabri_Nobble

**Millennium Problems Research Suite – Comprehensive Framework for All 7 Millennium Problems**

---

<div align="center">
  <img src="Image/Dar2.png" width="80%" style="border-radius: 12px; border: 2px solid #6ae3ff;" alt="Dar Al-Hajar, Yemen">
  <p><i>🏛️ Dar Al-Hajar, Yemen – The heritage that bridges the ancient past to the future of physics.</i></p>
</div>

---

## 📖 About This Repository

**Jabri_Nobble** is the comprehensive research suite dedicated to the **Millennium Problems**. It includes modular implementations and theoretical frameworks for each of the seven problems under the unified **Zx framework** and **Al-Jabri Identity (`Z + C + A = 1`)**.

This repository houses peer-reviewed papers, LaTeX sources, Jupyter notebooks, datasets, and visualizations for:

- **Riemann Hypothesis** – Jabri_Riemann
- **P vs NP** – Jabri_np
- **Yang-Mills Mass Gap** – Jabri_gap
- **Navier-Stokes** – Jabri_Navier
- **Birch and Swinnerton-Dyer** – Jabri_Birch
- **Hodge Conjecture** – Jabri_Hodge

**Key Features:**
- 📄 **Peer-reviewed papers** (PDFs) for each problem.
- 📓 **Reproducible Jupyter notebooks** – Run all cells to reproduce results.
- 📊 **Datasets and figures** – All data and visualizations are versioned.
- 📝 **LaTeX sources** – Full source code for each paper.
- 🔗 **DOIs** for each sub-project (see table below).

---

## 🗂️ Repository Structure

| Directory | Description |
| :--- | :--- |
| `Db-pdf/` | PDFs of all papers (Jabri_Riemann.pdf, Jabri_np.pdf, Jabri_gab.pdf, Jabri_Navier.pdf, Jabri_Birch.pdf, Jabri_Hodge.pdf) |
| `Tex/` | LaTeX sources for all papers (`.tex` files) |
| `Python/` | Jupyter notebooks for reproducing each experiment (`.ipynb`) |
| `Data/` | CSV datasets used in the notebooks |
| `Image/` | Figures and plots generated from the notebooks |

---

## 📚 Sub-Projects & DOIs

| # | Sub-Project | Paper (PDF) | LaTeX | Notebook | Data | Figure | DOI |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Jabri_Riemann** | [PDF](Db-pdf/Jabri_Riemann.pdf) | [TeX](Tex/Jabri_Riemann.tex) | [IPYNB](Python/Jabri_Riemann.ipynb) | [CSV](Data/Jabri_Riemann_table.csv) | - | [20139904](https://doi.org/10.5281/zenodo.20139904) |
| 2 | **Jabri_np** | [PDF](Db-pdf/Jabri_np.pdf) | [TeX](Tex/Jabri_np.tex) | [IPYNB](Python/Jabri_np.ipynb) | [CSV](Data/Jabri_np_table.csv) | [PNG](Image/Jabri_np_figure.png) | [20145279](https://doi.org/10.5281/zenodo.20145279) |
| 3 | **Jabri_gap** | [PDF](Db-pdf/Jabri_gab.pdf) | [TeX](Tex/Jabri_gab.tex) | [IPYNB](Python/Jabri_gap.ipynb) | [CSV](Data/Jabri_gap_table.csv) | [PNG](Image/Jabri_gap_figure.png) | [20148344](https://doi.org/10.5281/zenodo.20148344) |
| 4 | **Jabri_Navier** | [PDF](Db-pdf/Jabri_Navier.pdf) | [TeX](Tex/Jabri_Navier.tex) | [IPYNB](Python/Jabri_Navier.ipynb) | [CSV](Data/Jabri_Navier_table.csv) | [PNG](Image/Jabri_Navier_figure.png) | [20149618](https://doi.org/10.5281/zenodo.20149618) |
| 5 | **Jabri_Birch** | [PDF](Db-pdf/Jabri_Birch.pdf) | [TeX](Tex/Jabri_Birch.tex) | [IPYNB](Python/Jabri_Birch.ipynb) | [CSV](Data/Jabri_Birch_table.csv) | [PNG](Image/Jabri_Birch_figure.png) | Publishing |
| 6 | **Jabri_Hodge** | [PDF](Db-pdf/Jabri_Hodge.pdf) | [TeX](Tex/Jabri_Hodge.tex) | [IPYNB](Python/Jabri_Hodge.ipynb) | [CSV](Data/Jabri_Hodge_table.csv) | [PNG](Image/Jabri_Hodge_figure.png) | Publishing |

---

## 🔬 How to Reproduce

Each sub-project has a dedicated Jupyter notebook. To reproduce the results:

```bash
pip install mpmath numpy pandas matplotlib jupyter
jupyter notebook Jabri_Riemann.ipynb