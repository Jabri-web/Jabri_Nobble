# Jabri_Nobble

## Description
Research repository for the Jabri_Nobble project. Contains the source code, notebooks, and figures for proofs using the Jabri identity $Z_t=1$.

## Papers

### 1. Navier-Stokes Existence and Smoothness on an Invariant Set
**Paper:** `Jabri_Navier.pdf`  
**Notebook:** `Jabri_Navier_proof.ipynb`  
**Data:** `Jabri_Navier_results.csv`  
**Figure:** `Jabri_Navier_fig.png`  
**DOI:** 10.5281/zenodo.20148770  
Proof of global existence and smoothness for 3D Navier-Stokes for initial data with $\|u_0\|_{H^s}\leq\gamma_5$.

### 2. Riemann Hypothesis
**Paper:** `Riemann_Hypo.pdf`  
**Notebook:** `Jabri_derivation.ipynb`  
**Data:** `Jabri_Identity.csv`, `Jabri_Wells.csv`  
**Figures:** `Jabri_Identity_Proof.png`, `Figure_Zt1_identity.png`  
**DOI:** 10.5281/zenodo.19981688  
Derivation and numerical verification of the Jabri identity $Z_t=1$ for the first zeros.

### 3. P vs NP
**Paper:** `Jabri_n_p.pdf`  
**Notebook:** `Jabri_n_p_proof.ipynb`  
**Data:** `Jabri_NP_results.csv`  
**Figure:** `Figure_Ztnp_Jabri.png`  
Proof that P ≠ NP using time complexity bounds from the Jabri identity.

### 4. Yang-Mills Mass Gap
**Paper:** `Jabri_gab.pdf`  
**Notebook:** `Jabri_gap_proof.ipynb`  
**Data:** `Jabri_Gap_results.csv`  
**Figure:** `Jabri_gap_fig.png`  
Numerical verification of mass gap existence for Yang-Mills theory.

## Figures
<p align="center">
  <img src="Figure_Zt1_identity.png?raw=true" width="23%" alt="RH Figure"/>
  <img src="Figure_Ztnp_Jabri.png?raw=true" width="23%" alt="NP Figure"/>
  <img src="Jabri_gap_fig.png?raw=true" width="23%" alt="Gap Figure"/>
  <img src="Jabri_Navier_fig.png?raw=true" width="23%" alt="Navier-Stokes Figure"/>
</p>

## How to Reproduce Results
Each paper has a notebook. Run all cells in order:

```bash
pip install mpmath numpy pandas matplotlib
jupyter notebook [notebook_name].ipynb
