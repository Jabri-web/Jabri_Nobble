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
**Paper:** `Riemanm_Hypo.pdf`  
**DOI:** 10.5281/zenodo.19981688

### 3. P vs NP
**Paper:** `Jabri_n_p.pdf`

### 4. Gap Problem
**Paper:** `Jabri_gab.pdf`

## Figures
<p align="center">
  <img src="Figure_Zt1_identity.png?raw=true" width="30%" alt="RH Figure"/>
  <img src="Figure_Ztnp_Jabri.png?raw=true" width="30%" alt="NP Figure"/>
  <img src="Jabri_gap_fig.png?raw=true" width="30%" alt="Gap Figure"/>
  <img src="Jabri_Navier_fig.png?raw=true" width="30%" alt="Navier-Stokes Figure"/>
</p>

## How to Reproduce Navier-Stokes Results
```bash
pip install mpmath numpy pandas matplotlib
jupyter notebook Jabri_Navier_proof.ipynb
